import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import NewsCard from "../components/NewsCard";
import { useEffect } from "react";
import { fetchSearchNews } from "../features/news/newsSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";

function Search() {
  // search news data async thunk
  const { data, dataCount, isLoading, errorMessage } = useSelector(
    (state) => state.searchNews
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const query = params.searchQuery || "";

  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page") || 0);

  const totalPage =
    Math.ceil(dataCount / 10) > 100 ? 100 : Math.ceil(dataCount / 10);

  const handlePageClick = ({ selected }) => {
    navigate(`/search/${query}?page=${selected}`);
  };

  useEffect(() => {
    dispatch(fetchSearchNews({ currentPage, query }));
  }, [dispatch, currentPage, query]);

  if (errorMessage) {
    return (
      <div className="h-[calc(100vh-6rem)] flex flex-col justify-center items-center text-base leading-7 text-gray-600">
        <h1 className="">Sorry, an unexpected error has occurred</h1>
        <p>{errorMessage}</p>
      </div>
    );
  }

  return isLoading ? (
    <Loading />
  ) : (
    <section className="container mx-auto pb-6">
      <h1 className="px-4 py-6 text-4xl font-bold">
        Search result for {query}
      </h1>

      <div className="container mb-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-x-0 gap-y-6">
        {data.map((article) => {
          return <NewsCard key={article._id} {...article} />;
        })}
      </div>

      {totalPage && (
        <Pagination
          totalPage={totalPage}
          currentPage={currentPage}
          handlePageClick={handlePageClick}
        />
      )}
    </section>
  );
}

export default Search;
