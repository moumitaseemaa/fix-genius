import CheckIcon from "@/assets/icons/callList.jsx/CheckIcon";
import ClockLite from "@/assets/icons/callList.jsx/ClockLite";
import CallIcon from "@/assets/icons/cards/CallIcon";
import { Badge } from "@/components/ui/badge";
import { callLogs } from "@/datas/callLogsData";

const CallList = ({ active, setActive }) => {
  return (
    <div className="rounded-3xl color-card pb-6 ">
      <h3 className="font-inter font-normal text-[20px] leading-7 text-white mb-4 cursor-pointer p-4 border-b border-[#2B7FFF20] ">
        Call list
      </h3>
      {callLogs.map((item) => (
        <div
          className={`flex justify-between p-4 ${item.id === active?.id ? "border-b-3 border-[#2B7FFF]" : item.id === callLogs[callLogs.length - 1].id ? "" : "border border-[#2B7FFF10]  cursor-pointer "} `}
          key={item.id}
          onClick={() => setActive(item)}
        >
          <div className="flex flex-col gap-5">
            <div className="flex gap-4 ">
              <div className="icon">
                <CallIcon />
              </div>
              <div className="font-inter font-normal">
                <p className="text-white text-base leading-6 ">
                  {item.phoneNumber}
                </p>
                <small className="text-gray text-xs leading-5 ">
                  {item.dateTime[0] + " • " + item.dateTime[1]}
                </small>
              </div>
            </div>

            <div className="flex items-center gap-4.5">
              <div className="flex items-center gap-1 text-gray">
                <div className="">
                  <ClockLite />
                </div>
                <time>{item.duration}</time>
              </div>
              <div className="flex items-center gap-1 text-gray">
                <div className="">
                  <CheckIcon className={"size-4"} />
                </div>
                <p>{item.outcome}</p>
              </div>
              <div className="">
                <Badge className="bg-[#2B7FFF20] text-info rounded-sm py-0.5 px-4 font-inter leading-5 text-sm ">
                  {item.issueType}
                </Badge>
              </div>
            </div>
          </div>

          <div className="">
            <Badge
              className={` rounded-[10px] py-1 px-2 font-inter leading-5 text-xs 
                ${item.callType === "AI Resolved" && "text-success bg-[#00C95020] border border-[#00C95030] "}
                ${item.callType === "Warm Transfer" && "text-warn bg-[#FF690020] border border-[#FF690030] "}
                ${item.callType === "Appointment" && "text-info bg-[#2B7FFF20] border border-[#2B7FFF30] "}
                ${item.callType === "Dropped" && "text-error bg-[#FF150020] border border-[#FF690030] "} `}
            >
              {item.callType}
            </Badge>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CallList;
