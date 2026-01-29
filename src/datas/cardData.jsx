import ArrowIcon from "@/assets/icons/cards/ArrowIcon";
import BookedIcon from "@/assets/icons/cards/BookedIcon";
import BotIcon from "@/assets/icons/cards/BotIcon";
import CallIcon from "@/assets/icons/cards/CallIcon";
import ClockIcon from "@/assets/icons/cards/ClockIcon";
import MissedCallIcon from "@/assets/icons/cards/MissedCallIcon";


export const cardData = [
   {
      title: 'Total Calls Today',
      CardValue: '127',
      percent: '+12%',
      icon: <CallIcon className={'size-8 sm:size-12'} />,
      isMissed: false
    },
    { 
      title: 'AI-Handled Calls',
      CardValue: '98',
      percent: '+77%',
      icon: <BotIcon className={'size-8 sm:size-12'} />,
      isMissed: false
    },
    {
      title: 'Warm Transfer',
      CardValue: '23',
      percent: '+18%',
      icon: <ArrowIcon className={'size-8 sm:size-12'} />,
      isMissed: false
    },
    {
      title: 'Appointments Booked',
      CardValue: '34',
      percent: '+8%',
      icon: <BookedIcon className={'size-8 sm:size-12'} />,
      isMissed: false
    },
    {
      title: 'Missed/Failed Calls',
      CardValue: '6',
      percent: '-3%',
      isMissed: true,
      icon: <MissedCallIcon className={'size-8 sm:size-12'} />,
    },
    {
      title: 'Avg Call Duration',
      CardValue: '3:42',
      percent: '+15%',
      icon: <ClockIcon className={'size-8 sm:size-12'} />,
      isMissed: false
    }
];
