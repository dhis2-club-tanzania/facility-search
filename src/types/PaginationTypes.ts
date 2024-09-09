export interface PaginationContextType {
  facilities: any[];
  setFacilities: React.Dispatch<React.SetStateAction<any[]>>;
  page: number;
  pageSize: number;
  onPageChange: (newPage: number) => void;
  onPageSizeChange: (newPageSize: number) => void;
}
