import { useNavigate, useSearchParams } from "react-router-dom";
import NewsCard from "../components/NewsCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchIndonesiaNews } from "../features/news/newsSlice";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";

function Index() {
  // indonesia news data async thunk
  const { data, dataCount, isLoading, errorMessage } = useSelector(
    (state) => state.indonesiaNews
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page") || 0);

  // totalPage for reactpaginate
  const totalPage =
    Math.ceil(dataCount / 10) > 100 ? 100 : Math.ceil(dataCount / 10);

  const handlePageClick = ({ selected }) => {
    navigate(`/?page=${selected}`);
  };

  useEffect(() => {
    dispatch(fetchIndonesiaNews(currentPage));
  }, [dispatch, currentPage]);

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
      <h1 className="px-4 py-6 text-3xl font-bold">Indonesia</h1>

      <div className="container mb-7 mt-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-x-0 gap-y-6">
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

export default Index;
