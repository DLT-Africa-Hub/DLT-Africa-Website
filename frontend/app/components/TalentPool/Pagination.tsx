import React from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { PAGINATION_CONFIG, ACCESSIBILITY_CONFIG } from "./constants";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  loading: boolean;
  onPageChange: (direction: "next" | "prev") => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  loading,
  onPageChange,
}) => {
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const isFirstPage = currentPage === PAGINATION_CONFIG.DEFAULT_PAGE;
  const isLastPage = currentPage >= totalPages;

  const btnBase =
    "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C7800] disabled:cursor-not-allowed disabled:opacity-40";

  return (
    <div
      className="mt-6 flex w-full max-w-md items-center justify-between gap-4 sm:mt-8"
      role="group"
      aria-label={ACCESSIBILITY_CONFIG.ARIA_LABELS.PAGINATION}
    >
      <button
        type="button"
        onClick={() => onPageChange("prev")}
        className={`${btnBase} bg-[#1C7800] hover:bg-[#155f00]`}
        disabled={isFirstPage || loading}
        aria-label="Go to previous page"
      >
        <IoIosArrowBack className="text-xl" aria-hidden />
      </button>

      <span
        className="min-w-0 flex-1 text-center font-poppins text-sm font-medium text-[#1C1C1C]/80"
        aria-live="polite"
      >
        Page {currentPage} of {totalPages}
      </span>

      <button
        type="button"
        onClick={() => onPageChange("next")}
        className={`${btnBase} bg-[#1C7800] hover:bg-[#155f00]`}
        disabled={isLastPage || loading}
        aria-label="Go to next page"
      >
        <MdOutlineNavigateNext className="text-xl" aria-hidden />
      </button>
    </div>
  );
};

export default Pagination;
