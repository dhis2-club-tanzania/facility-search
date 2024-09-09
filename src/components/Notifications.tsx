import React from "react";
import { AlertBar } from "@dhis2/ui";
import { useAppContext } from "src/context/AppContext";

const Notifications: React.FC = () => {
  const { success, setSuccess, error, setError, searchLoading } =
    useAppContext();
  return (
    <div className="notification-container">
      {success && (
        <AlertBar duration={5000} onHidden={() => setSuccess(false)} success>
          Data successfully posted.
        </AlertBar>
      )}
      {error && !searchLoading && (
        <AlertBar onHidden={() => setError(null)} critical>
          {error}
        </AlertBar>
      )}
    </div>
  );
};

export default Notifications;
