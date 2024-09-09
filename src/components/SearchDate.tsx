import React, { useState, useEffect } from "react";
import FacilityList from "./FacilityList";
import DateInput from "./DateInput";
import { CircularLoader } from "@dhis2/ui";
import FacilityOutput from "src/pages/FacilityOutput";
import { useAppContext } from "src/context/AppContext";
import { usePaginationContext } from "src/context/PaginationContext";

const SearchDate: React.FC = () => {
  const { facilityData, facilityLoading } = useAppContext();
  const { setFacilities } = usePaginationContext();
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);

  useEffect(() => {
    if (startDate || endDate) {
      fetchFacilities();
    }
  }, [startDate, endDate]);

  const handleStartDateChange = (event: { value: string }) => {
    setStartDate(event.value);
  };

  const handleEndDateChange = (event: { value: string }) => {
    setEndDate(event.value);
  };

  const fetchFacilities = () => {
    const apiResponse = [
      {
        facilityCode: "115174-5",
        facilityName: "KABWE",
        region: "Rukwa Region",
      },
      {
        facilityCode: "115074-5",
        facilityName: "KILWE",
        region: "Tanga Region",
      },
      {
        facilityCode: "115174-2",
        facilityName: "Kagera",
        region: "Manyara Region",
      },
      {
        facilityCode: "115174-5",
        facilityName: "KABWE",
        region: "Rukwa Region",
      },
      {
        facilityCode: "115074-5",
        facilityName: "KILWE",
        region: "Tanga Region",
      },
      {
        facilityCode: "115174-2",
        facilityName: "Kagera",
        region: "Manyara Region",
      },
    ];

    const facilitiesWithIds = apiResponse.map((facility, index) => ({
      id: index + 1,
      ...facility,
    }));

    setFacilities(facilitiesWithIds);
  };

  return (
    <>
      {!facilityLoading && !facilityData && (
        <DateInput
          startDate={startDate}
          endDate={endDate}
          onStartDateChange={handleStartDateChange}
          onEndDateChange={handleEndDateChange}
        />
      )}
      {facilityLoading ? (
        <div className="circle-loader">
          <CircularLoader />
        </div>
      ) : (
        !facilityData && (startDate || endDate) && <FacilityList />
      )}

      {facilityData && <FacilityOutput />}
    </>
  );
};

export default SearchDate;
