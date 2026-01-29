import { cardData } from "@/datas/cardData";
import CardLayout from "./CardLayout";

const CardPair = () => {
  return (
    <div className="my-3 md:my-6 flex items-center justify-between gap-3 px-2 md:px-0 md:gap-6 flex-wrap">
      {cardData.map((card, index) => (
        <div key={index} className=" w-[31.2%] grow">
          <CardLayout
            title={card.title}
            CardValue={card.CardValue}
            percent={card.percent}
            afterIcon={card.icon}
            isMissed={card.isMissed}
          />
        </div>
      ))}
    </div>
  );
};

export default CardPair;
