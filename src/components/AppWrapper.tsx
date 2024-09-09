import React from "react";
import { useAppContext } from "src/context/AppContext";
import FacilityOutput from "src/pages/FacilityOutput";
import Search from "src/pages/Search";
import Notifications from "./Notifications";

const AppWrapper = () => {
  const { facilityData } = useAppContext();
  return (
    <div className="app-container">
      {!facilityData ? <Search /> : <FacilityOutput />}
      <Notifications />
    </div>
  );
};

export default AppWrapper;
