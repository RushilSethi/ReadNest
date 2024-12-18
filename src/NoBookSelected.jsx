import { Link } from 'react-router-dom';

const NoBookSelected = () => {
  return (
    <div className="bg-background min-h-screen flex items-center justify-center">
      <div className="container p-6 rounded-lg shadow-medium bg-container text-primary">
        <h1 className="text-2xl font-semibold mb-4">Book Not Found</h1>
        <p className="text-secondary mb-4">The book you are looking for does not exist or no book was selected. Please choose a valid book or return to the main pages.</p>
        <div className="space-x-4">
          <Link to="/" className="text-accent-primary hover:text-accent-secondary">
            Go to Welcome Page
          </Link>
          <Link to="/books" className="text-accent-primary hover:text-accent-secondary">
            Go to Books Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoBookSelected;
