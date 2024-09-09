import React from "react";
import { Button } from "@dhis2/ui";
import { useAppContext } from "src/context/AppContext";

const UpdateBtns: React.FC = () => {
  const { handleBack, handleUpdate, updateLoading } = useAppContext();
  return (
    <div className="button-container">
      <div className="backBtn">
        <Button basic medium onClick={handleBack}>
          Back
        </Button>
      </div>
      <div className="updateBtn">
        <Button onClick={handleUpdate} primary large disabled={updateLoading}>
          {updateLoading ? "Updating..." : "Update HMIS"}
        </Button>
      </div>
    </div>
  );
};

export default UpdateBtns;
