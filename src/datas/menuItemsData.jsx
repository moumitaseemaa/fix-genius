import HomeIcon from "../assets/icons/sidebar/HomeIcon.jsx";
import PhoneIcon from "../assets/icons/sidebar/PhoneIcon.jsx";
import CalenderIcon from "../assets/icons/sidebar/CalenderIcon.jsx";
import SettingsIcon from "../assets/icons/sidebar/SettingsIcon.jsx";

const menuItemsData = [
 {
        icon: <HomeIcon/>,
        text: 'Dashboard Overview',
        routeName: '/'
    },
    {
        icon: <PhoneIcon/>,
        text: 'Call Logs',
        routeName: '/call-history'
    },
    {
        icon: <CalenderIcon/>,
        text: 'Appointments',
        routeName: '/appointment'
    },
    {
        icon: <SettingsIcon/>,
        text: 'Settings',
        routeName: '/settings'
    },
]
export default menuItemsData