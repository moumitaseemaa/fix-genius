import DropdownButton from "@/components/Dropdown";
import { SearchIcon } from "lucide-react";
import { useState } from "react";
import CallDetails from "./CallDetails.jsx";
import CallList from "./CallList";
import callLogs from "../datas/callLogsData.js";
import { SearchBar } from "./SearchBar";

const CallLogs = () => {
  const [active, setActive] = useState(callLogs[0]);

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
    <div className="m-6">
      <div className="flex justify-between gap-6 ">
        <div className="flex flex-col gap-6 grow max-w-1/2 text-white ">
          <SearchBar
            icon={<SearchIcon />}
            className={"color-card-bg pl-4 h-12.5   "}
          />

          <CallList active={active} setActive={setActive} />
        </div>

        <div className="flex flex-col gap-6 grow max-w-1/2 ">
          <div className="flex gap-6 justify-end">
            <DropdownButton items={callType} />
            <DropdownButton items={issueArray} />
            <DropdownButton items={dateArray} />
          </div>

          <CallDetails data={active} />
        </div>
      </div>
    </div>
  );
};

export default CallLogs;