import React, { createContext, useState, useContext, ReactNode } from "react";
import { PaginationContextType } from "src/types/PaginationTypes";

const PaginationContext = createContext<PaginationContextType | undefined>(
  undefined
);

export const PaginationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [facilities, setFacilities] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const onPageChange = (newPage: number) => {
    setPage(newPage);
  };

  const onPageSizeChange = (newPageSize: number) => {
    setPageSize(newPageSize);
    setPage(1);
  };

  return (
    <PaginationContext.Provider
      value={{
        facilities,
        setFacilities,
        page,
        pageSize,
        onPageChange,
        onPageSizeChange,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

export const usePaginationContext = () => {
  const context = useContext(PaginationContext);
  if (!context) {
    throw new Error(
      "usePaginationContext must be used within a PaginationProvider"
    );
  }
  return context;
};
