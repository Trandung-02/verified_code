import React from 'react';
import Modal from './Modal';
import { usePrivacyCenterLocale } from '@/components/privacy-center/PrivacyCenterLocaleContext';
import { privacyCenterMessages } from '@/lib/privacy-center-messages';

interface SuccessModalProps {
    isOpend: boolean;
    onToggleSuccess: (value: boolean) => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpend, onToggleSuccess }) => {

    const [isOpen, setIsOpen] = React.useState(isOpend);
    const { locale } = usePrivacyCenterLocale();
    const t = privacyCenterMessages[locale];

    React.useEffect(() => {
        setIsOpen(isOpend);
    }, [isOpend]);

    const handleClose = () => {
        setIsOpen(false);
        onToggleSuccess(false);
    };

    return (
        <Modal
            isOpen={isOpen}
            title={t.modalSuccessTitle}
            onClose={handleClose}
        >

            <div className="h-full flex flex-col flex-start w-full items-center justify-between flex-1">
                <div className="w-full">
                    <div className='rounded-[10px] overflow-hidden mb-[15px]'>
                        <img src="/images/meta/succes.jpg" width="100%" alt="" />
                    </div>
                    <p className='text-[#465a69] mb-[12px] text-[15px] leading-relaxed pt-5'>
                        {t.modalSuccessBody}
                    </p>
                    <p className='text-[#9a979e] mb-[22px] text-[14px]'>{t.modalSuccessByline}</p>
                    <a
                        className='flex h-[45px] min-h-[45px] w-full items-center justify-center rounded-[40px] bg-[#0064E0] text-[15px] font-medium text-white transition-opacity duration-300 hover:opacity-95'
                        href="https://www.facebook.com/"
                    >
                        {t.modalSuccessCta}
                    </a>
                </div>

                <div className='w-[60px] mt-[20px] mx-auto pt-8'>
                    <img src="/images/meta/logo-gray.svg" width="100%" height="100%" alt="logo" />
                </div>
            </div>
        </Modal>
    );
};

export default SuccessModal;
