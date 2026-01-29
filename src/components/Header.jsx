import { Link, useLocation } from "react-router-dom";
import AppNotificationIcon from "../assets/icons/sidebar/AppNotificationIcon";
import profileImage from "../assets/images/profileImage.png";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className="sticky top-0 bg-primary z-50 w-auto flex items-center justify-between px-2 md:px-6 py-2">
      <h1 className="font-inter font-normal text-base md:text-[32px] leading-9 text-white">
        {pathname == "/" && "Dashboard Overview"}
        {pathname == "/call-history" && "Call Logs & History"}
        {pathname == "/appointment" && "Appointments"}
        {pathname.includes("/settings") && "Settings"}
      </h1>

      <div className=" flex items-center justify-end md:justify-center space-x-2.5 md:space-x-10">
        <AppNotificationIcon className={" text-white size-6"} />
        <div className="w-7.5 h-7.5 md:w-full md:h-full">
          <img src={profileImage} alt="profileImage" className="size-full" />
        </div>
      </div>
    </header>
  );
};

export default Header;
