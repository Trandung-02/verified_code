import React from 'react';
import Modal from './Modal';

interface SuccessModalProps {
    isOpend: boolean;
    onToggleSuccess: (value: boolean) => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpend, onToggleSuccess }) => {

    const [isOpen, setIsOpen] = React.useState(isOpend);

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
            title="Request submitted"
            onClose={handleClose}
        >

            <div className="h-full flex flex-col flex-start w-full items-center justify-between flex-1">
                <div className="w-full">
                    <div className='rounded-[10px] overflow-hidden mb-[15px]'>
                        <img src="/images/meta/succes.jpg" width="100%" alt="" />
                    </div>
                    <p className='text-[#465a69] mb-[12px] text-[15px] leading-relaxed pt-5'>
                        Your request is in our queue. We aim to review it within 24 hours. If we need more
                        information, we will contact you using the details you provided—please respond
                        promptly so we can continue processing your case.
                    </p>
                    <p className='text-[#9a979e] mb-[22px] text-[14px]'>Meta Customer Support</p>
                    <a
                        className='flex h-[45px] min-h-[45px] w-full items-center justify-center rounded-[40px] bg-[#0064E0] text-[15px] font-medium text-white transition-opacity duration-300 hover:opacity-95'
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Return to Facebook
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
