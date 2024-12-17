import { popularPicks } from "./dummyApi";
import fictionImage from "./assets/CategoryImages/fiction.jpeg";
import nonFictionImage from "./assets/CategoryImages/non_fiction.jpeg";
import fantasyImage from "./assets/CategoryImages/fantasy.jpeg";
import scienceFictionImage from "./assets/CategoryImages/science_fiction.jpeg";
import mysteryImage from "./assets/CategoryImages/mystery.jpeg";
import romanceImage from "./assets/CategoryImages/romance.jpeg";
import horrorImage from "./assets/CategoryImages/horror.jpeg";
import welcomeBanner from "./assets/welcome_banner.webp";

const categories = [
  { id: 1, name: "Fiction", image: fictionImage },
  { id: 2, name: "Non-Fiction", image: nonFictionImage },
  { id: 3, name: "Fantasy", image: fantasyImage },
  { id: 4, name: "Science Fiction", image: scienceFictionImage },
  { id: 5, name: "Mystery", image: mysteryImage },
  { id: 6, name: "Romance", image: romanceImage },
  { id: 7, name: "Horror", image: horrorImage },
];

const WelcomePage = () => {
  return (
    <div className="bg-background text-primary min-h-screen p-6">
      <section
        className="text-center mb-8 mt-12 relative"
        style={{
          backgroundImage: `url(${welcomeBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>{" "}
        <div className="relative z-10 py-12">
          <h1 className="text-4xl font-bold mb-2 text-white">
            Welcome to the ReadNest
          </h1>
          <p className="text-[var(--text-secondary)] text-white">
            Discover, explore, and indulge in the world of books!
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Categories</h2>
        <div className="relative overflow-x-auto whitespace-nowrap py-4">
          <div className="flex gap-4">
            {categories.map((category) => (
              <div
                key={category.id}
                className="relative min-w-[150px] h-40 rounded-lg overflow-hidden shadow-md cursor-pointer"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>{" "}
                <div className="absolute inset-x-0 bottom-0 text-center py-2">
                  <span className="text-white text-lg font-semibold">
                    {category.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Popular Picks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularPicks.map((book) => (
            <div
              key={book.id}
              className="bg-container text-primary rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{book.title}</h3>
                <p className="text-secondary">{book.author}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WelcomePage;
