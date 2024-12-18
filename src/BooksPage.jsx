import { Link, Outlet, useParams } from "react-router-dom";

const BooksPage = () => {
  const { category } = useParams();

  const categoryClasses = {
    "All Books": "bg-accent-primary",
    "Fiction": "bg-accent-secondary",
    "Non-Fiction": "bg-accent-tertiary",
    "Fantasy": "bg-accent-primary",
    "Science Fiction": "bg-accent-secondary",
    "Mystery": "bg-accent-tertiary",
    "Romance": "bg-accent-primary",
    "Horror": "bg-accent-secondary",
  };

  const categories = [
    "All Books",
    "Fiction",
    "Non-Fiction",
    "Fantasy",
    "Science Fiction",
    "Mystery",
    "Romance",
    "Horror",
  ];

  return (
    <div className="bg-background text-primary min-h-screen p-6">
      <section className="text-center mb-8 mt-12">
        <h1 className="text-4xl font-bold mb-2">Browse Books</h1>
      </section>

      <section className="mb-8">
        <div className="flex justify-center gap-4 flex-wrap">
        {categories.map((cat) => {
            const isActive =
              category === cat || (!category && cat === "All Books");

            return (
              <Link
                to={`/books${cat === "All Books" ? "" : `/${cat}`}`}
                key={cat}
              >
                <button
                  className={`p-2 rounded-full ${
                    isActive
                      ? `${categoryClasses[cat]} text-white`
                      : "bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              </Link>
            );
          })}
        </div>
      </section>

      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default BooksPage;
