import { Link, useLocation } from "react-router-dom";
import { addSaved, getSavedNews } from "../javascript/javascript";

function Saved() {
  let savedNews = getSavedNews();
  const location = useLocation();
  return (
    <div className="container mx-auto p-4 mb-6">
      <h1 className="px-4 py-6 text-3xl font-bold">Saved News</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Source
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {savedNews &&
              savedNews.map((article) => (
                <tr
                  key={article._id}
                  className="font-normal text-gray-700 dark:text-gray-400 odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <td scope="row" className="px-6 py-4">
                    <p>
                      <span>{article.source} - </span>
                      {article.byline.original ? article.byline.original : ""}
                    </p>
                    <p className="mt-1 text-blue-600 hover:underline">
                      <Link to={article.web_url} target="_blank">
                        News Page
                      </Link>
                    </p>
                  </td>
                  <td className="px-6 py-4">{article.headline.main}</td>
                  <td className="px-6 py-4">{article.abstract}</td>
                  <td className="px-6 py-4 text-center">
                    <Link
                      to={location.pathname}
                      onClick={(event) => addSaved(event, article._id)}
                      className="inline-flex items-center bg-red-700 hover:bg-red-800 px-3 py-2 text-xs font-medium text-center text-white rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700"
                    >
                      Unsave
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Saved;
