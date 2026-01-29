import { SearchBar } from "../components/SearchBar.jsx";
import { SearchIcon } from "lucide-react";
import DropdownButton from "../components/DropdownButton";
import CallList from "../components/CallList";
import CallDetails from "../components/CallDetails";
import { callLogsData } from "../datas/callLogData";
import { useState } from "react";

const CallLogsHistoryPage = () => {
  const [active, setActive] = useState(callLogsData[0]);
  const issueArray = ["All Issues", "Screen", "Software", "Battery", "Unknown"];
  const callType = [
    "All Type",
    "AI Resolved",
    "Warm Transfer",
    "Appointment",
    "Dropped",
  ];
  const dateArray = ["Today", "Last Week", "Last Month", "This Year", "All"];
  return (
    <section className="m-2 sm:m-6 flex flex-col sm:gap-6 gap-4">
      <div className="flex flex-wrap md:flex-nowrap justify-between gap-6 ">
        <div className="grow w-full md:max-w-1/2 ">
          <SearchBar
            icon={<SearchIcon />}
            className={"color-card pl-4 h-12.5   "}
          />
        </div>
        <div className="grow md:max-w-1/2 ">
          <div className="flex sm:gap-6 justify-end ">
            <DropdownButton className={'bg-primary text-sm sm:text-base max-w-27.5 sm:max-w-full overflow-hidden  '} items={callType} />
            <DropdownButton className={'bg-primary text-sm sm:text-base max-w-27.5 sm:max-w-full overflow-hidden  '} items={issueArray} />
            <DropdownButton className={'bg-primary text-sm sm:text-base max-w-27.5 sm:max-w-full overflow-hidden  '} items={dateArray} />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap md:flex-nowrap justify-between gap-6 ">
        <div className="flex flex-col gap-6 grow md:max-w-1/2 text-white ">
          <CallList active={active} setActive={setActive} />
        </div>

        <div className="flex flex-col gap-6 grow md:max-w-1/2 ">
          <CallDetails data={active} />
        </div>
      </div>
    </section>
  );
};

export default CallLogsHistoryPage;
