import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const CommonLayout = () => {
  return (
    <div className="flex mx-auto w-full bg-[linear-gradient(118.53deg,#020618_-34.38%,#162456_54.59%,#0F172B_143.57%)]">
      <Sidebar />
      <div className=" w-full">
        <Header />
        <div className="md:ml-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CommonLayout;
