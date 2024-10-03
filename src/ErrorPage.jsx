import { Link, useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Oops!
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="mt-4 text-lg font-normal">
          <i>{error.statusText || error.message}</i>
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to={"/"}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
