import RepairRequest from "@/components/RepairRequest";
import RecentActivity from "../components/RecentActivity";
import Graph from "@/components/Graph";
import CardPair from "@/components/CardPair";

const DashboardPage = () => {
  return (
    <>
      <CardPair />
      <Graph />
      <div className="flex justify-between gap-6 pt-6 flex-wrap md:flex-nowrap ">
        <RecentActivity />
        <RepairRequest />
      </div>
    </>
  );
};

export default DashboardPage;
