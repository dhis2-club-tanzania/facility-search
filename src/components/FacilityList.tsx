import React, { useMemo } from "react";
import {
  DataTable,
  TableHead,
  DataTableRow,
  DataTableColumnHeader,
  TableBody,
  DataTableCell,
  Pagination,
} from "@dhis2/ui";
import { usePaginationContext } from "src/context/PaginationContext";
import { useAppContext } from "src/context/AppContext";

const FacilityList: React.FC = () => {
  const { facilities, page, pageSize, onPageChange, onPageSizeChange } =
    usePaginationContext();
  const { handleSearchDate } = useAppContext();
  const paginatedFacilities = useMemo(() => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return facilities.slice(startIndex, endIndex);
  }, [facilities, page, pageSize]);
  return (
    <>
      <div className="facility-list">
        <DataTable>
          <TableHead>
            <DataTableRow role="row">
              <DataTableColumnHeader scope="col">#</DataTableColumnHeader>
              <DataTableColumnHeader scope="col">
                Facility Code
              </DataTableColumnHeader>
              <DataTableColumnHeader scope="col">
                Facility Name
              </DataTableColumnHeader>
              <DataTableColumnHeader scope="col">Region</DataTableColumnHeader>
            </DataTableRow>
          </TableHead>
          <TableBody>
            {paginatedFacilities.map((facility) => (
              <DataTableRow key={facility.id} className="row" role="row">
                <DataTableCell
                  onClick={() => handleSearchDate(facility.facilityCode)}
                >
                  {facility.id}
                </DataTableCell>
                <DataTableCell
                  onClick={() => handleSearchDate(facility.facilityCode)}
                >
                  {facility.facilityCode}
                </DataTableCell>
                <DataTableCell
                  onClick={() => handleSearchDate(facility.facilityCode)}
                >
                  {facility.facilityName}
                </DataTableCell>
                <DataTableCell
                  onClick={() => handleSearchDate(facility.facilityCode)}
                >
                  {facility.region}
                </DataTableCell>
              </DataTableRow>
            ))}
          </TableBody>
        </DataTable>
      </div>

      <div>
        <Pagination
          className="pagination"
          page={page}
          pageSize={pageSize}
          onPageChange={onPageChange}
          onPageSizeChange={onPageSizeChange}
          pageCount={Math.ceil(facilities.length / pageSize)}
          hidePageSummary
        />
      </div>
    </>
  );
};

export default FacilityList;
