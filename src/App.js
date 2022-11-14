import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";

import Agr from "./components/Agr";
import Agr2 from "./components/Agr2";
import AgrForm from "./components/Agr_form";
import CommonDash from "./components/CommonDash";
import Leave from "./components/Leave";
import Vcm01 from "./components/Vcm01";
import Vcm02 from "./components/Vcm02";
import Vcm03 from "./components/Vcm03";
import ViewStatus from "./components/ViewStatus";
import Vs01 from "./components/Vs01";
import Vs02 from "./components/Vs02";
import WeatherForacst from "./components/weatherForacst";
import SelectPlace from "./components/SelectPlace";
import CollectorProfile from "./components/Collector_profile";
import UpdateProfile from "./components/UpdateProfile";
import Login from "./pages/Login";
import VsEvent from "./components/Vs-event";
import VsAdditonal from "./components/Vs-additional";

function App() {
  return (
    <div className="App h-100">
      <Routes>
        <Route path="/" element={<Navigate replace to="/frame1" />} />
        <Route path="/" element={<Dashboard />}>
          <Route path="frame1" element={<Vcm01 />} />
          <Route path="frame2" element={<Vs01 />} />
          <Route path="frame3" element={<Vs02 />} />
          <Route path="frame4" element={<Agr />} />
          <Route path="frame5" element={<Agr2 />} />
          <Route path="frame6" element={<AgrForm />} />
          <Route path="frame7" element={<Vcm02 />} />
          <Route path="frameevent" element={<VsEvent />} />
          <Route path="frameaditional" element={<VsAdditonal />} />
          <Route path="frame8" element={<Vcm03 />} />
          <Route path="frame9" element={<WeatherForacst />} />
          <Route path="frame10" element={<Leave />} />
          <Route path="frame11" element={<ViewStatus />} />
          <Route path="frame12" element={<CommonDash />} />
          <Route path="frame13" element={<SelectPlace />} />
          <Route path="profile/frame14" element={<CollectorProfile />} />
          <Route path="profile/frame15" element={<UpdateProfile />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/employee/:id" element={<CollectorProfile />} />
      </Routes>
    </div>
  );
}

export default App;
