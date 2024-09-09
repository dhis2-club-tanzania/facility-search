import React from "react";
import FacilityData from "../components/FacilityData";
import UpdateBtns from "../components/UpdateBtns";

const FacilityOutput: React.FC = () => {
  return (
    <div className="facility-output-container">
      <FacilityData />
      <UpdateBtns />
    </div>
  );
};

export default FacilityOutput;
