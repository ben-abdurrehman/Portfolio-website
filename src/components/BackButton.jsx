import { IoIosArrowRoundBack } from "react-icons/io";

export function BackButton() {
  return (
      <button className="relative group mb-5 overflow-hidden">
        {/* Arrow Container */}
        <a href="/" className="relative flex items-center">
          {/* Left-moving arrow (on hover) */}
          <div className="relative w-6 h-8 flex items-center justify-center overflow-hidden">
          <IoIosArrowRoundBack className="text-white text-3xl absolute inset-0 group-hover:-translate-x-full transition-transform duration-300" />
          {/* Incoming arrow from right */}
          <IoIosArrowRoundBack className="text-white text-3xl absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
          </div>

          {/* Back text */}
          <span className="relative w-16 h-8 flex items-center justify-center overflow-hidden">
            
            <span className="text-white text-xl absolute inset-0 group-hover:-translate-y-full transition-transform duration-300">
                Back
            </span> 

            <span className="text-white text-xl absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                Back
            </span> 

          </span>
        </a>
      </button>
  );
}