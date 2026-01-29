import { Link } from "react-router-dom";
import profileImage from "../assets/images/profileImage.png";

const SettingsPage = () => {
  const profileData = [
    {
      id: 1,
      text: "Full Name:",
      para: "Jane D.",
    },
    {
      id: 2,
      text: "Email:",
      para: "jane@gmail.com",
    },
    {
      id: 3,
      text: "Store Name:",
      para: "Ubreakfix Store",
    },
    {
      id: 4,
      text: "Store Address:",
      para: "123 Main Street, New York, NY 10001",
    },
  ];

  return (
    <>
      <div className="pt-6 md:max-w-137.5 w-full pr-4 sm:pr-0">
        <div className="font-inter font-normal sm:text-2xl text-base leading-9 text-white flex gap-x-4 sm:gap-x-16 ml-3">
          <button>Profile</button>
          <button>Password Settings</button>
        </div>
        <div className="sm:mt-10 mt-6">
          <h3 className="font-inter font-normal text-base sm:text-xl leading-[150%] text-white mb-2">
            Profile Image
          </h3>
          <div className="flex sm:gap-x-2 gap-x-1">
            <div className="size-25.5">
              <img src={profileImage} alt="profileImage" className="w-full" />
            </div>
            <div className="mb-2 place-self-end">
              <Link
                to={"/settings/profile"}
                className={`py-1 px-2 rounded-xl inset-shadow border-b border-[rgba(255,255,255,0.50)]`}
              >
                <span className=" font-inter whitespace-nowrap font-medium sm:text-base text-xs leading-[150%] text-white">
                  Edit Profile
                </span>
              </Link>
            </div>
          </div>
          <div className="sm:pt-6 pt-4">
            {profileData.map((item, id) => (
              <div
                key={id}
                class="flex items-center sm:py-4 py-2 border-b border-borderBottom last:border-transparent"
              >
                <p class="font-inter font-medium text-[14px] sm:text-xl leading-[150%] text-white sm:w-51.5 min-w-[120px] whitespace-nowrap ">
                  {item.text}
                </p>
                <p class="font-inter font-normal text-[14px] sm:text-xl leading-[150%] text-white  ">
                  {item.para}
                </p>
              </div>
            ))}
         
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
