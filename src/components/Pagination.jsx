// Importing necessary icons from react-icons
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

// Pagination component that handles page navigation
function Pagination({ currentPage, totalPages, onPageChange }) {
  // Function to handle the action of going to the previous page
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Function to handle the action of going to the next page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4 mt-8 text-sm sm:text-lg tracking-wide">
      {
        // Render Previous Page Button if not on the first page
        currentPage !== 1 ? (
          <PaginationButton
            handlePage={handlePreviousPage}
            styles="justify-start"
          >
            <FaArrowLeftLong /> {currentPage - 1} Previous
            <span className="hidden sm:block">page</span>
          </PaginationButton>
        ) : (
          <div></div>
        )
      }

      {
        // Render Next Page Button if not on the last page
        currentPage !== totalPages && (
          <PaginationButton handlePage={handleNextPage} styles="justify-end">
            Next <span className="hidden sm:block">page</span> {currentPage + 1}
            <FaArrowRightLong />
          </PaginationButton>
        )
      }
    </div>
  );
}

// PaginationButton component for rendering individual page navigation buttons
function PaginationButton({ children, handlePage, styles }) {
  return (
    <button
      onClick={handlePage}
      className={`px-3 py-3 md:px-4 md:py-4 lg:px-4 lg:py-6 mx-1 bg-[#5a5859] border border-[rgb(120,120,120)] text-white/60 rounded-[18px] flex ${styles} items-center gap-3 hover:scale-105 hover:text-white transition`}
    >
      {children}
    </button>
  );
}

// Exporting the Pagination component as the default export
export default Pagination;
