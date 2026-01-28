import { useLocation } from "react-router-dom";

const CardLayout = ({ beforeIcon, afterIcon, CardValue, title, percent,isMissed }) => {
  let { pathname } = useLocation();
  return (
    <div
      className={` w-full color-card-bg p-6 rounded-2xl flex gap-2 font-inter justify-between`}
    >
      <div className="flex flex-col flex-1 gap-2">
        <div className="flex gap-3">
          {beforeIcon && <div className="">{beforeIcon}</div>}
          <p className="text-gray text-sm font-normal leading-5">{title}</p>
        </div>
        <p className="text-2xl leading-9 text-white "> {CardValue}</p>
        <p
          className={`${pathname === "/" ? (isMissed ? " text-red" : "text-green") : " text-gray"} text-sm font-normal leading-5`}
        >
          {" "}
          {percent}
        </p>
      </div>
      {afterIcon && <div className="">{afterIcon}</div>}
    </div>
  );
};

export default CardLayout;
