import { useLocation } from "react-router-dom";

const CardLayout = ({
  beforeIcon,
  afterIcon,
  CardValue,
  title,
  percent,
  isMissed,
}) => {
  let { pathname } = useLocation();
  return (
    <div
      className={`color-card-bg p-2 sm:p-6 rounded-2xl flex sm:flex-row flex-col-reverse items-center sm:items-start gap-2 font-inter justify-between text-center sm:text-start`}
    >
      <div className="flex flex-col flex-1 gap-1 sm:gap-2">
        {/* =============== beforeIcon =============== */}
        <div className="flex gap-3">
          {beforeIcon && <div>{beforeIcon}</div>}
          <p
            className={`text-gray text-sm font-normal leading-5 ${beforeIcon || "h-10 sm:h-auto"}`}
          >
            {title}
          </p>
        </div>
        <p className="text-lg sm:text-2xl leading-9 text-white ">
          {" "}
          {CardValue}
        </p>
        <p
          className={`${pathname === "/" || pathname === "/appointment" ? (isMissed === true ? "text-red" : isMissed === false ? "text-green" : "text-gray") : "text-gray"} text-sm font-normal leading-5`}
        >
          {percent}
        </p>
      </div>
      {/* =============== afterIcon =============== */}
      {afterIcon && <div className="size-8">{afterIcon}</div>}
    </div>
  );
};

export default CardLayout;
