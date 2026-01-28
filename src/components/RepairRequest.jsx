import ReqProgress from "./ReqProgress";

const RepairRequest = () => {
  return (
    <div className="grow font-arimo p-6 rounded-2xl bg-graph-bg border border-borderColor">
      <h3 className="font-inter font-normal text-[20px] leading-7 text-white mb-4 cursor-pointer">
       Top Repair Requests
      </h3>
      <div className="mt-4 space-y-3">
        <ReqProgress
         value={68}
          requestName="Screen Repair"
          requestNum={156}
         />
        <ReqProgress
          value={39}
          requestName="Battery Replacement"
          requestNum={89}
        />
        <ReqProgress
          value={30}
          requestName="Back Glass Repair"
          requestNum={67}
        />
        <ReqProgress value={20} requestName="Software Issues" requestNum={45} />
      </div>
    </div>
  );
};

export default RepairRequest;
