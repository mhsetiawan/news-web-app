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
        <p className="mt-4 text-base font-normal text-gray-600">
          <i>{error.statusText || error.message}</i>
        </p>
        <Link
          to={"/"}
          className="inline-flex mt-4 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
