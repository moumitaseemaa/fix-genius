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
      <div className="pt-6 max-w-137.5">
        <div className="font-inter font-normal text-2xl leading-9 text-white flex gap-x-16 ml-3">
          <button>Profile</button>
          <button>Password Settings</button>
        </div>
        <div className="mt-10">
          <h3 className="font-inter font-normal text-[20px] leading-[150%] text-white mb-2">
            Profile Image
          </h3>
          <div className="flex gap-x-2">
            <div className="size-25.5">
              <img src={profileImage} alt="profileImage" className="w-full" />
            </div>
            <div className="mb-2 place-self-end">
              <Link
                to={"/settings/profile"}
                className={`py-1 px-2 rounded-xl inset-shadow border-b border-[rgba(255,255,255,0.50)]`}
              >
                <span className=" font-inter whitespace-nowrap font-medium text-base leading-[150%] text-white">
                  Edit Profile
                </span>
              </Link>
            </div>
          </div>
          <div className="pt-6 ">
            {profileData.map((item, id) => (
              <div
                key={id}
                class="flex   items-center  py-4 border-b border-borderBottom"
              >
                <p class="font-inter font-medium text-[20px] leading-[150%] text-white w-51.5 ">
                  {item.text}
                </p>
                <p class="font-inter font-normal text-[20px] leading-[150%] text-white">
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
