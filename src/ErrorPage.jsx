import { Link } from "react-router-dom";
import errorImage from "./assets/404_image.webp"

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-primary p-6 text-center">
      <img
        src={errorImage}
        alt="Error"
        className="mb-6 w-1/2 max-w-xs"
      />
      <h1 className="text-4xl font-bold mb-4">Oops! Page Not Found</h1>
      <p className="text-lg mb-6">
        The page you are looking for might have been removed or is temporarily unavailable.
      </p>
      <Link to="/" className="px-4 py-2 bg-accent-primary text-white rounded-lg hover:bg-accent-secondary duration-300 ease-in">
        Go to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
