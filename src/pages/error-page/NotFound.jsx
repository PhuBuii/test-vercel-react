import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="flex items-center h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-16">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto">
        <div className="max-w-lg text-center">
          <h1 className="mb-4 text-8xl font-extrabold text-blue-600">404</h1>
          <h2 className="mb-4 text-2xl font-semibold md:text-4xl text-gray-800">
            Oops! Page Not Found
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            The page you’re looking for doesn’t seem to exist. Try heading back
            to the homepage or contacting support if the problem persists.
          </p>
          <Link
            to="/"
            className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
