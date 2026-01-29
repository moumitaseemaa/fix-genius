import AppointmentBookedIcon from "@/assets/icons/appointment/appointmentBookedIcon";
import AppointmentCalenderIcon from "@/assets/icons/appointment/appointmentCalenderIcon";
import AppointmentWarnIcon from "@/assets/icons/appointment/appointmentWarnIcon";

export const appoinmentCardData = [
  {
    icon: <AppointmentCalenderIcon />,
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
