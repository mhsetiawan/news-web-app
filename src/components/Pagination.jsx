import ReactPaginate from "react-paginate";

const Pagination = ({ currentPage, totalPage, handlePageClick }) => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={"Next >"}
      previousLabel={"< Prev"}
      onPageChange={handlePageClick}
      pageRangeDisplayed={10}
      pageCount={totalPage}
      initialPage={currentPage}
      disableInitialCallback={true}
      activeLinkClassName={`bg-gray-300 pointer-events-none`}
      nextClassName={`flex items-center justify-center px-3 h-8 ms-2 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white
              ${currentPage === totalPage - 1 ? "hidden" : ""}`}
      containerClassName={`container flex justify-center gap-0 flex-wrap`}
      pageLinkClassName={`flex items-center justify-center px-2 h-8 ms-2 text-base font-medium text-gray-500 border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
      previousLinkClassName={`flex items-center justify-center px-3 h-8 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white
            ${currentPage === 0 ? "hidden" : ""}`}
      breakClassName={`flex items-center justify-center px-3 h-8 ms-2 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
    />
  );
};

export default Pagination;
