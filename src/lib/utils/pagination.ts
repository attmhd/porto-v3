export type PaginationResult<T> = {
  items: T[];
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
};

export function paginate<T>(
  items: T[],
  page: number = 1,
  pageSize: number = 5
): PaginationResult<T> {
  const totalItems = items.length;
  const safePageSize = Math.max(1, pageSize);
  const totalPages = Math.max(1, Math.ceil(totalItems / safePageSize));
  const currentPage = Math.min(Math.max(1, Math.floor(page)), totalPages);
  const startIndex = (currentPage - 1) * safePageSize;
  const paginatedItems = items.slice(startIndex, startIndex + safePageSize);

  return {
    items: paginatedItems,
    currentPage,
    totalPages,
    pageSize: safePageSize,
    totalItems,
    hasNextPage: currentPage < totalPages,
    hasPrevPage: currentPage > 1
  };
}
