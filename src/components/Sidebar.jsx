import { Link, useLocation } from "react-router-dom";
import LogoutIcon from "../assets/icons/sidebar/LogoutIcon.jsx";
import logo from "../assets/images/logo.png";
import menuItemsData from "../datas/menuItemsData.jsx";

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <aside className="h-screen sticky top-0 flex flex-col bg-primary pt-9.5 pb-13 border border-[#2B7FFF20] ">
      <div className="w-fit mx-auto">
        <img className="size-8 xl:size-fit" src={logo} alt="logo" />
      </div>

      <ul className="mt-10 sm:mt-18 font-medium text-base leading-[150%] text-white px-1 sm:px-2 space-y-7">
        {menuItemsData.map((item, index) => (
          <li key={index}>
            <Link
              to={item.routeName}
              className={`py-1 px-1 sm:px-2 inline-flex xl:flex items-center gap-0 xl:gap-4 rounded-xl whitespace-nowrap ${pathname == item.routeName ? "inset-shadow border-b border-[rgba(255,255,255,0.50)]" : ""}`}
            >
              <span className="  text-white h-8 w-8 flex items-center justify-center ">
                {item.icon}
              </span>
              <span className=" hidden xl:block font-inter bg-dark-blue font-medium text-base leading-[150%] text-white">
                {item.text}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <button className="flex items-center gap-4 ml-2 md:ml-4 mt-auto cursor-pointer">
        <span className="hover:text-red">
          <LogoutIcon className={"size-6 md:size-8"} />
        </span>
        <span className="hidden xl:block font-medium text-base leading-[150%] text-[#FF1100]">
          Log Out
        </span>
      </button>
    </aside>
  );
};

export default Sidebar;
