import ReactPaginate from "react-paginate";

const Pagination = ({ currentPage, totalPage, handlePageClick }) => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={
        <>
          <span className="sr-only">Next</span>
          <svg
            className="w-2.5 h-2.5 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </>
      }
      previousLabel={
        <>
          <span className="sr-only">Previous</span>
          <svg
            className="w-2.5 h-2.5 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </>
      }
      onPageChange={handlePageClick}
      pageRangeDisplayed={10}
      pageCount={totalPage}
      initialPage={currentPage}
      disableInitialCallback={true}
      activeLinkClassName={`bg-blue-200 pointer-events-none`}
      nextClassName={`flex items-center justify-center px-3 h-8 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white
              ${currentPage === totalPage - 1 ? "hidden" : ""}`}
      containerClassName={`container flex justify-center gap-0 flex-wrap p-4`}
      pageLinkClassName={`flex items-center justify-center px-2 h-8 text-base font-normal text-gray-700 border border-gray-300 hover:bg-blue-50 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
      previousLinkClassName={`flex items-center justify-center px-3 h-8 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white
            ${currentPage === 0 ? "hidden" : ""}`}
      breakClassName={`flex items-center justify-center px-3 h-8 text-base font-medium text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
    />
  );
};

export default Pagination;
