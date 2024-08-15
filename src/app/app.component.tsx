import { Component, inject, signal } from "@angular/core";
import { NgxDhis2HttpClientService, User } from "@iapps/ngx-dhis2-http-client";
import { Observable } from "rxjs";
import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableCellHead,
  TableHead,
  TableRow,
  TableRowHead,
  InputField,
  Button,
} from "@dhis2/ui";
import { useAlert } from "@dhis2/app-runtime";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root-content",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  SearchComp = () => {
    const [loading, setLoading] = React.useState(false);
    const [facilityData, setFacilityData] = React.useState(null);
    const [searchCode, setSearchCode] = React.useState("");
    const successAlert = useAlert("Data successfully posted.", {
      success: true,
      duration: 3000,
    });
    const errorAlert = useAlert("Failed to update the facility.", {
      critical: true,
      duration: 3000,
    });

    const handleSearch = async () => {
      if (!searchCode) return;

      setLoading(true);

      const url = ``;

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Facility not found");
        }

        const data = await response.json();
        setFacilityData(data);
      } catch (error) {
        console.error(error);
        setFacilityData(null);
      } finally {
        setLoading(false);
      }
    };
    const handleUpdate = async () => {
      setLoading(true);

      const url =
        "http://41.59.228.47/hfr-adapter/health-facility-registry.json";
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
          body: JSON.stringify({}),
        });

        setLoading(false);

        if (!response.ok) {
          throw new Error("Failed to update the facility");
        }

        successAlert.show();
      } catch (error) {
        setLoading(false);
        errorAlert.show();
      }
    };

    return (
      <div className="search-container">
        <div className="search-field">
          <InputField
            placeholder="Example: 105457-5"
            label="Search for Health Facility By Code"
            value={searchCode}
            onChange={(e: any) => setSearchCode(e.target.value)}
          />
        </div>
        <div className="table-button-container">
          <div className="searchBtn">
            <Button
              basic
              medium
              onClick={handleSearch}
              style={{ width: "150px" }}
            >
              Search
            </Button>
          </div>
          <Table>
            <TableHead>
              <TableRowHead>
                <TableCellHead>Fields</TableCellHead>
                <TableCellHead>Values</TableCellHead>
              </TableRowHead>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Faculty ID</TableCell>
                <TableCell>105457-5</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>ETEST</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Region</TableCell>
                <TableCell>Tabora</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>District</TableCell>
                <TableCell>Tabora</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Facility Type</TableCell>
                <TableCell>Health Center</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Ownership</TableCell>
                <TableCell>Company/Business Name</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Operating Status</TableCell>
                <TableCell>Operating</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Opening Date</TableCell>
                <TableCell>2024-05-27 00:00:00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Created At</TableCell>
                <TableCell>2024-05-30 00:00:00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="updateBtn">
            <Button
              onClick={handleUpdate}
              primary
              large
              disabled={loading}
              style={{ width: "100%", maxWidth: "200px", marginTop: "20px" }}
            >
              {loading ? "Updating..." : "Update HMIS"}
            </Button>
          </div>
        </div>
      </div>
    );
  };
}
