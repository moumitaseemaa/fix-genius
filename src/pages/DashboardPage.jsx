import RepairRequest from "@/components/RepairRequest";
import RecentActivity from "../components/RecentActivity";
import Graph from "@/components/Graph";
import CardPair from "@/components/CardPair";

const DashboardPage = () => {
  return (
    <>
      <CardPair />
      <Graph />
      <div className="flex justify-between gap-x-6 pt-6">
        <RecentActivity />
        <RepairRequest />
      </div>
    </>
  );
};

export default DashboardPage;
