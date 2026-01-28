import { Routes, Route } from "react-router";
import CallLogsHistoryPage from "./pages/CallLogsHistoryPage";
import SettingsPage from "./pages/SettingsPage";
import AppointmentsPage from "./pages/AppointmentsPage";
import DashboardPage from "./pages/DashboardPage";
import CommonLayout from "./components/CommonLayout";
import EdittProfilePage from "./pages/EdittProfilePage";

const App = () => {
  return (
    <Routes>
      <Route element={<CommonLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="/call-history" element={<CallLogsHistoryPage />} />
        <Route path="/appointment" element={<AppointmentsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/settings/profile" element={<EdittProfilePage />} />
      </Route>
    </Routes>
  );
};

export default App;
