import profileImage from "../assets/images/profileImage.png";
import EditIcon from "@/assets/icons/profile/EditIcon";
import { profileForm } from "@/datas/profileForm";

const EdittProfilePage = () => {

  return (
    <div className="md:pt-6 pt-4 md:max-w-250 max-w-[80%] pr-4 xl:pr-0 ml-3 md:ml-0">
      <div className="font-inter font-normal md:text-2xl text-base leading-9 text-white flex gap-x-4 sm:gap-x-16  ml-3 border-b border-borderBottom pb-2">
        <button className={"border-b-2 -mb-2 px-3 border-b-[#87A2FF]"}>
          Profile
        </button>
        <button className="whitespace-nowrap mt-2 sm:mt-0" >Password Settings</button>
      </div>

      <div className="sm:mt-10 mt-6" >
        <h3 className="font-inter font-normal text-base sm:text-xl leading-[150%] text-white mb-2">
          Profile Image
        </h3>

        <div className="flex relative ">
          <div className="md:size-25.5 size-15">
            <img src={profileImage} alt="profileImage" className="w-full" />
          </div>
          <div className="absolute md:top-17 md:left-16 top-10 left-10">
            <EditIcon  className="w-5 h-5 md:w-10 md:h-10"/>
          </div>
        </div>

        {/* ===================== profile form ===================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-y-6 gap-y-4  gap-x-14 md:mt-14 mt-7 w-auto">
          {profileForm.map((field, index) => (
            <div key={index} className="flex flex-col gap-2">
              <label className="font-inter font-medium sm:text-xl text-base leading-[150%] text-white">
                {field.label}
              </label>

              <input
                type={field.type}
                placeholder={field.placeholder}
                className="font-inter font-normal text-base leading-6 text-white
                   bg-formbg border border-formborder
                   py-3 px-4 rounded-[14px]"
              />
            </div>
          ))}
        </div>
             {/* ===================== profile button ===================== */}

        <div className="lg:mt-20 mt-8 mb-8  flex sm:items-center sm:justify-center justify-start  cursor-pointer">
          <button className="py-2 lg:px-39 px-20  bg-[#00C950] font-inter font-bold sm:text-xl text-base leading-[150%] text-white rounded-3xl">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EdittProfilePage;
