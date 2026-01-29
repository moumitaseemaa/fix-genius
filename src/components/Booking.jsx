import { Copy } from "lucide-react";
import { Check } from "lucide-react";
import { useState } from "react";

const Booking = () => {
  let [copyLink, setCopyLink] = useState(false);

  const handleLinkCopy = async () => {
    const text = "https://techstore.com/book?id=store123";
    navigator.clipboard.writeText(text);
    setCopyLink(true);
    setTimeout(() => setCopyLink(false), 1500);
  };

  return (
    <div className="p-4 md:p-6.25 w-full rounded-4xl bg-linear-to-b from-[#1A1A2E] to-[#16213E]">
      <h3 className=" font-inter font-normal text-base leading-6 text-white">
        Booking Link
      </h3>

      <div className=" mt-4 flex max-md:flex-col items-center justify-center gap-3">
        <div className=" cursor-pointer max-md:p-2 grow md:py-3.25  md:px-4 rounded-[14px] border border-[#0e4236] bg-[#111421] font-arimo font-normal text-sm md:text-base md:leading-6 text-white">
          https://techstore.com/book?id=store123
        </div>
        <button
          onClick={() => handleLinkCopy()}
          className="inset-shadow-primary cursor-pointer rounded-2xl bg-linear-to-b from-[#152252] to-[#111B3C] flex items-center justify-center gap-x-4 h-12.5 w-37.25 font-inter font-medium text-base leading-[150%] text-white"
        >
          {copyLink ? (
            <Check
              className={`${copyLink ? "scale-100" : " scale-0"}  transition-all duration-500 md:text-2xl`}
            />
          ) : (
            <Copy
              className={`${copyLink ? "scale-0" : "scale-100"} transition-all duration-500 md:text-2xl`}
            />
          )}
          Copy Link
        </button>
      </div>
    </div>
  );
};

export default Booking;
