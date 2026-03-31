import billHarrisImg from '@/assets/Bill-Harris-img.png'
import openIcon from '@/assets/open-icon.svg'

export default function ProfileSection() {
  return (
    <section className="relative flex flex-col bg-profile-bg px-4 pt-2 pb-4 sm:px-6 md:w-1/2 md:border-l md:border-divider md:px-8 md:pt-6 md:pb-8">
      <div className="absolute top-1/2 left-[-6px] z-10 hidden h-[36px] w-[12px] -translate-y-1/2 rounded-full bg-handle md:block" />

      <div className="hidden md:block">
        <button
          type="button"
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg transition-colors hover:bg-black/5"
        >
          <img src={openIcon} alt="Open" className="h-[18px] w-[20px]" />
        </button>
      </div>

      <div className="mx-auto flex w-full flex-1 flex-col justify-center">
        <img
          src={billHarrisImg}
          alt="Bill Harris"
          className="w-full rounded-2xl object-cover md:mt-4 mt-3"
        />

        <div className="mt-3 flex items-start gap-2.5 sm:gap-3 md:mt-5 md:gap-3.5">
          <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[4px] bg-text-primary sm:h-[50px] sm:w-[50px] sm:rounded-[5px] md:h-[70.29px] md:w-[70.29px]">
            <span className="font-georgia text-[28px] leading-[100%] font-normal tracking-[0px] text-white sm:text-[36px] md:text-[43.51px]">
              e
            </span>
          </div>

          <div className="flex min-w-0 flex-1 flex-col">
            <h2 className="font-helvetica text-[15px] leading-[20px] tracking-[0px] sm:text-[18px] sm:leading-[24px] md:text-[21.75px] md:leading-[28.28px]">
              <span className="font-bold">Bill Harris,</span>{' '}
              <span className="font-medium">Founder, Evergreen</span>
            </h2>
            <p className="font-helvetica text-[12px] leading-[17px] font-normal text-text-primary sm:text-[14px] sm:leading-[20px] md:text-[16px] md:leading-[22px]">
              35-year veteran of financial technology startups
            </p>
            <p className="mt-0.5 font-helvetica text-[10px] leading-[14px] font-extralight tracking-[0px] text-evergreen-dark sm:text-[12px] sm:leading-[16px] md:pr-[95px] md:text-[13.39px] md:leading-[17.4px]">
              This is my AI replica trained to help answer your questions.
              Outputs are not a substitute for professional advice.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
