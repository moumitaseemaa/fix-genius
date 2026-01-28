import { Link, useLocation } from "react-router-dom";
import AppNotificationIcon from "../assets/icons/sidebar/AppNotificationIcon";
import profileImage from "../assets/images/profileImage.png";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className="bg-primary sticky top-0 w-full flex items-center justify-between px-6 py-2">
      <h1 className="font-inter font-normal text-[32px] leading-9 text-white">
        {pathname == "/" && "Dashboard Overview"}
        {pathname == "/call-history" && "Call Logs & History"}
        {pathname == "/appointment" && "Appointments"}
        {pathname.includes("/settings") && "Settings"}
      </h1>

      <div className="flex items-center justify-center space-x-10">
        <AppNotificationIcon />
        <img src={profileImage} alt="profileImage" />
      </div>
    </header>
  );
};

export default Header;
