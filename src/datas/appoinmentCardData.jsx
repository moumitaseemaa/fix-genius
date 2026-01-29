import AppointmentBookedIcon from "../assets/icons/appointment/AppointmentBookedIcon.jsx";
import AppointmentCalenderIcon from "../assets/icons/appointment/AppointmentCalenderIcon.jsx";
import AppointmentWarnIcon from "../assets/icons/appointment/AppointmentWarnIcon.jsx";

export const appoinmentCardData = [
  {
    icon: <AppointmentCalenderIcon className={"size-5"} />,
    title: "Total Booked",
    CardValue: "34",
    percent: "+8 this week",
    isMissed: false,
  },
  {
    icon: <AppointmentWarnIcon />,
    title: "AI Booked",
    CardValue: "28",
    percent: "82% of total",
    isMissed: undefined,
  },
  {
    icon: <AppointmentBookedIcon />,
    title: "Pending",
    CardValue: "3",
    percent: "Awaiting confirmation",
    isMissed: undefined,
  },
];
