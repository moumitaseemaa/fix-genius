import CheckIcon from "@/assets/icons/callList.jsx/CheckIcon";
import ClockLite from "@/assets/icons/callList.jsx/ClockLite";
import CallIcon from "@/assets/icons/cards/CallIcon";
import { Badge } from "@/components/ui/badge";
import { callLogsData } from "@/datas/callLogData";

const CallList = ({ active, setActive }) => {
  return (
  
    <section className="rounded-3xl color-card-bg pb-6 ">
      <h3 className="font-inter font-normal text-[20px] leading-7 text-white mb-4 cursor-pointer p-4 border-b border-[#2B7FFF20] ">
        Call list
      </h3>
      {callLogsData.map((item) => (
        <div
          className={`flex justify-between p-3 sm:p-4 relative ${item.id === active.id ? "border-b-3 border-[#2B7FFF]" : item.id === callLogsData[callLogsData.length - 1].id ? "" : "border border-[#2B7FFF10]  cursor-pointer "} `}
          key={item.id}
          onClick={() => setActive(item)}
        >
          <div className="flex flex-col gap-3 sm:gap-5 grow">
            <div className="flex gap-3 sm:gap-4 ">
                <CallIcon className={'size-8 sm:size-12'} />

              <div className="font-inter font-normal">
                <p className="text-white text-sm md:text-base leading-6 ">
                  {item.phoneNumber}
                </p>
                <small className="text-gray text-[10px] md:text-xs leading-5 ">
                  {item.dateTime[0] + " • " + item.dateTime[1]}
                </small>
              </div>
            </div>

            <div className="flex items-center gap-3.5 sm:gap-4.5 text-xs sm:text-sm ">
              <div className="flex items-center gap-1 text-gray">
                  <ClockLite className={''} />
                <time className="">{item.duration}</time>
              </div>
              <div className="flex items-center gap-1 text-gray">
                  <CheckIcon className={"size-4 "} />
                <p>{item.outcome}</p>
              </div>
                <Badge className="bg-[#2B7FFF20] text-info rounded-sm py-0.5 px-4 font-inter leading-5 text-xs sm:text-sm ">
                  {item.issueType}
                </Badge>
            </div>
          </div>

          <div className="absolute right-2.5 ">
            <Badge
              className={` rounded-[10px] py-1 px-2 font-inter leading-5 text-xs 
                ${item.callType === "AI Resolved" && "text-[#05DF72] bg-[#00C95020] border border-[#00C95030] "}
                ${item.callType === "Warm Transfer" && "text-[#FF8904] bg-[#FF690020] border border-[#FF690030] "}
                ${item.callType === "Appointment" && "text-info bg-[#2B7FFF20] border border-[#2B7FFF30] "}
                ${item.callType === "Dropped" && "text-[#FF0404] bg-[#FF150020] border border-[#FF690030] "} `}
            >
              {item.callType}
            </Badge>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CallList;
