import React from "react";
import { InputField, Button, CircularLoader } from "@dhis2/ui";
import { Link } from "react-router-dom";
import { useAppContext } from "src/context/AppContext";

const SearchCode: React.FC = () => {
  const { searchLoading, searchCode, setSearchCode, handleSearchCode } =
    useAppContext();
  return (
    <>
      {searchLoading ? (
        <div className="circle-loader">
          <CircularLoader />
        </div>
      ) : (
        <>
          <h1 className="search-title">Search For Health Facility By Code</h1>
          <div className="search-block">
            <div className="search-field">
              <InputField
                placeholder="Example: 115174-5"
                inputWidth="70vw"
                value={searchCode}
                onChange={(e: { value: string }) => setSearchCode(e.value)}
              />
            </div>
            <div className="btn-link-container">
              <div className="searchBtn">
                <Button primary large onClick={handleSearchCode}>
                  Search
                </Button>
              </div>
              <div className="search-link">
                <Link to="/search/date">Search by Date instead?</Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SearchCode;
