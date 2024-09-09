import React from "react";
import { InputField } from "@dhis2/ui";
import { Link } from "react-router-dom";

interface DateInputProps {
  startDate: string | null;
  endDate: string | null;
  onStartDateChange: (event: any) => void;
  onEndDateChange: (event: any) => void;
}

const DateInput: React.FC<DateInputProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) => {
  return (
    <>
      <h1 className="search-title">Search For Health Facility By Date</h1>
      <div className="date-fields">
        <div className="start-date">
          <InputField
            label="Start Date"
            type="date"
            value={startDate ?? ""}
            onChange={onStartDateChange}
          />
        </div>
        <div className="end-date">
          <InputField
            label="End Date"
            type="date"
            value={endDate ?? ""}
            onChange={onEndDateChange}
          />
        </div>
      </div>
      <div className="code-link">
        <Link to="/search/code">Search by Code instead?</Link>
      </div>
    </>
  );
};

export default DateInput;
