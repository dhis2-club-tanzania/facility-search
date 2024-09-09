import React, { createContext, useState, useContext } from "react";
import { FacilityDataType } from "src/types/FacilityTypes";
import { useNavigate } from "react-router-dom";

interface AppContextType {
  searchLoading: boolean;
  searchCode: string;
  setSearchCode: React.Dispatch<React.SetStateAction<string>>;
  handleSearchCode: () => Promise<void>;
  handleSearchDate: (facilityCode: string) => void;
  fieldsToDisplay: string[];
  handleUpdate: () => Promise<void>;
  handleBack: () => void;
  updateLoading: boolean;
  facilityLoading: boolean;
  facilityData: FacilityDataType | null;
  setFacilityData: React.Dispatch<
    React.SetStateAction<FacilityDataType | null>
  >;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  success: boolean;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchCode, setSearchCode] = useState("");
  const [facilityLoading, setFacilityLoading] = useState(false);
  const [facilityData, setFacilityData] = useState<FacilityDataType | null>(
    null
  );
  const [updateLoading, setUpdateLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSearchCode = async () => {
    if (!searchCode) return;

    setSearchLoading(true);
    setError(null);

    const url = `http://41.59.227.69/hfr-adapter/facility-search/${searchCode}`;
    const username = "dhis";
    const password = "Dhis@2024";

    try {
      const response = await fetch(url, {
        headers: {
          Authorization: "Basic " + btoa(`${username}:${password}`),
        },
      });

      if (!response.ok) {
        throw new Error("Facility not found");
      }

      const data = await response.json();
      setFacilityData(data);
    } catch (error: any) {
      console.error(error);
      setFacilityData(null);
      setError("Could not find the facility");
    } finally {
      setSearchLoading(false);
    }
  };

  const handleSearchDate = (facilityCode: string) => {
    setFacilityLoading(true);
    const url = `http://41.59.227.69/hfr-adapter/facility-search/${facilityCode}`;
    const username = "dhis";
    const password = "Dhis@2024";

    fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Basic " + btoa(username + ":" + password),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setFacilityData(data);
        setFacilityLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching facility data:", error);
        setFacilityLoading(false);
      });
  };

  const handleUpdate = async () => {
    setUpdateLoading(true);
    setError(null);
    setSuccess(false);

    const url = "http://41.59.228.47/hfr-adapter/health-facility-registry.json";
    const username = "hfr";
    const password = "Rdsj424hb@hfr!";

    const base64Credentials = btoa(`${username}:${password}`);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${base64Credentials}`,
        },
        body: JSON.stringify(facilityData),
      });

      if (!response.ok) {
        throw new Error("Failed to update the facility");
      }

      setSuccess(true);
    } catch (error: any) {
      console.error("Update error:", error);
      setError("Failed to update the facility");
    } finally {
      setUpdateLoading(false);
    }
  };

  const handleBack = () => {
    setFacilityData(null);
    setSearchCode("");
  };

  const fieldsToDisplay = [
    "Fac_IDNumber",
    "Name",
    "Region",
    "District",
    "OpenedDate",
    "CreatedAt",
    "FacilityType",
    "Ownership",
    "OperatingStatus",
  ];

  return (
    <AppContext.Provider
      value={{
        searchLoading,
        searchCode,
        setSearchCode,
        handleSearchCode,
        handleSearchDate,
        fieldsToDisplay,
        handleUpdate,
        handleBack,
        updateLoading,
        facilityLoading,
        facilityData,
        setFacilityData,
        error,
        setError,
        success,
        setSuccess,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
