import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableCellHead,
  TableHead,
  TableRow,
  TableRowHead,
} from "@dhis2/ui";
import { FacilityDataType } from "../types/FacilityTypes";
import { useAppContext } from "src/context/AppContext";

const FacilityData: React.FC = () => {
  const { fieldsToDisplay, facilityData } = useAppContext();
  return (
    <Table>
      <TableHead>
        <TableRowHead>
          <TableCellHead>Fields</TableCellHead>
          <TableCellHead>Values</TableCellHead>
        </TableRowHead>
      </TableHead>
      <TableBody>
        {fieldsToDisplay.map((key) => (
          <TableRow key={key}>
            <TableCell>{key}</TableCell>
            <TableCell>
              {(facilityData && facilityData[key as keyof FacilityDataType]) ??
                "N/A"}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default FacilityData;
