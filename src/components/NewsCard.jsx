import { Link, useLocation } from "react-router-dom";
import { addSaved, isAlreadySaved } from "../javascript/javascript";
import image from "../assets/default.jpg";

function NewsCard({
  abstract,
  headline,
  byline,
  multimedia,
  web_url,
  source,
  pub_date,
  _id,
}) {
  const location = useLocation();
  const date = new Date(pub_date);
  return (
    <div className="max-w-[300px] min-w-[300px] min-h-[585px] max-h-[585px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:border-gray-400 hover:shadow-lg hover:scale-105 duration-500">
      <div className=" min-h-[510px] max-h-[510px] mb-2">
        <img
          className="rounded-t-lg max-h-[200px] min-h-[200px] w-full object-cover"
          src={
            multimedia[0]?.url
              ? `http://www.nytimes.com/${multimedia[0]?.url}`
              : image
          }
          alt=""
        />

        <div className="p-5">
          <div className="mb-2">
            <h1 className="text-2xl news-title-text font-bold tracking-tight text-left text-pretty text-gray-900 dark:text-white hover:underline">
              {headline.main}
            </h1>
          </div>

          <p className="text-sm mb-2 text-slate-600 font-light">
            <span>{date.toDateString() + ", "}</span>
            {byline.original ? byline.original : "-"}
          </p>
          <div className="w-full h-[120px]">
            <p className="mb-3 font-normal news-text text-left text-gray-700 dark:text-gray-400">
              {abstract}
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 px-5 py-2">
        <Link
          to={web_url}
          target="_blank"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>

        <Link
          to={location.pathname + location.search}
          className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700
              ${
                isAlreadySaved(_id)
                  ? "bg-red-700 hover:bg-red-800"
                  : "bg-green-700 hover:bg-green-800"
              } `}
          onClick={(event) =>
            addSaved(event, _id, source, byline, web_url, headline, abstract)
          }
        >
          {isAlreadySaved(_id) ? "Unsave" : "Save"}
        </Link>
      </div>
    </div>
  );
}

export default NewsCard;
