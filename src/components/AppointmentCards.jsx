
import { appoinmentCardData } from "@/datas/appoinmentCardData";
import CardLayout from "./CardLayout";

const AppointmentCards = () => {
  return (
      <div className="my-3 md:my-6 flex items-center justify-center md:justify-between max-sm:gap-6 sm:gap-3 md:gap-10 flex-wrap">
     {
        appoinmentCardData.map((card, index) =>
        <div key={index} className=" w-[29.5%] grow">
            <CardLayout title={card.title} CardValue={card.CardValue} percent={card.percent} beforeIcon={card.icon}  isMissed={card.isMissed}/>
        </div>
        )
     }  
    </div>
  );
};

export default AppointmentCards;
