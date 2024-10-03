import { useLoaderData, useNavigate } from "react-router-dom";
import NewsCard from "../components/NewsCard";
import ReactPaginate from "react-paginate";

// const baseUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json`;
// export async function loader({ request }) {
//   const url = new URL(request.url);
//   const currentPage = Number(url.searchParams.get("page")) || 0;
//   console.log(currentPage, "<----searchparam");

//   try {
//     const response = await fetch(
//       `${baseUrl}?q=indonesia&fq=glocations:(%22indonesia%22)&sort=newest&page=${currentPage}&api-key=6Ojl6GXeXAW1mZ4PxniobvjtUrh2QWCN`
//     );
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const json = await response.json();
//     const articles = json.response.docs;
//     const totalData = json.response.meta.hits;
//     return { articles, currentPage, totalData };
//   } catch (error) {
//     console.log(error.message);
//   }
// }

function Index() {
  const { articles, currentPage, totalData } = useLoaderData();
  const navigate = useNavigate();
  const totalPage =
    Math.ceil(totalData / 10) > 100 ? 100 : Math.ceil(totalData / 10);
  // console.log(totalData);

  const handlePageClick = ({ selected }) => {
    console.log(selected, "selectedValue");

    navigate(`/?page=${selected}`);
  };
  return (
    <section className="container mx-auto pb-6">
      <h1 className="px-4 py-6 text-3xl font-bold">Indonesia</h1>

      <div className="container mb-7 mt-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-x-0 gap-y-6">
        {articles.map((article) => {
          return <NewsCard key={article._id} {...article} />;
        })}
      </div>

      {/* react paginate */}
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
    </section>
  );
}

export default Index;
