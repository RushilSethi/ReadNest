import bookPlaceholder from "./assets/book_placeholder.jpeg"

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description:
      "A story of the mysterious Jay Gatsby, told through the eyes of his neighbor Nick Carraway, set in the roaring twenties.",
    rating: 4.2,
    category: "Fiction",
    cover: bookPlaceholder,
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description:
      "A young girl named Scout Finch grows up in the racially segregated American South during the 1930s, witnessing injustice and racism in her community.",
    rating: 4.9,
    category: "Fiction",
    cover: bookPlaceholder,
  },
  {
    id: 3,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    description:
      "The story of Holden Caulfield, a disillusioned teenager, and his experiences as he navigates the adult world.",
    rating: 4.1,
    category: "Fiction",
    cover: bookPlaceholder,
  },
  {
    id: 4,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    description:
      "Harari explores the history of humankind, from the first Homo sapiens to the present day, including how culture, politics, and economics have shaped our world.",
    rating: 4.4,
    category: "Non-Fiction",
    cover: bookPlaceholder,
  },
  {
    id: 5,
    title: "Becoming",
    author: "Michelle Obama",
    description:
      "The former First Lady's memoir detailing her life from childhood to her years in the White House, providing a deep look at her experiences and challenges.",
    rating: 4.5,
    category: "Non-Fiction",
    cover: bookPlaceholder,
  },
  {
    id: 6,
    title: "How to Win Friends and Influence People",
    author: "Dale Carnegie",
    description:
      "A classic self-help book that offers timeless advice on improving communication skills, building relationships, and influencing people in a positive way.",
    rating: 4.6,
    category: "Non-Fiction",
    cover: bookPlaceholder,
  },
  {
    id: 7,
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    description:
      "A no-nonsense approach to living a good life by focusing on what truly matters and letting go of the societal pressures of perfection.",
    rating: 4.5,
    category: "Non-Fiction",
    cover: bookPlaceholder,
  },
  {
    id: 8,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    description:
      "A young wizard named Harry discovers his magical heritage and battles dark forces at Hogwarts School of Witchcraft and Wizardry.",
    rating: 4.7,
    category: "Fantasy",
    cover: bookPlaceholder,
  },
  {
    id: 9,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    description:
      "Bilbo Baggins, a hobbit, embarks on a journey to help dwarves reclaim their kingdom from the dragon Smaug.",
    rating: 4.6,
    category: "Fantasy",
    cover: bookPlaceholder,
  },
  {
    id: 10,
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    description:
      "Kvothe, a gifted young man, recounts his life story, including his time at the University and his search for the truth behind the mysterious Chandrian.",
    rating: 4.8,
    category: "Fantasy",
    cover: bookPlaceholder,
  },
  {
    id: 11,
    title: "Dune",
    author: "Frank Herbert",
    description:
      "In a distant future, Paul Atreides navigates the harsh desert planet Arrakis, facing political intrigue, war, and a battle for control of the most valuable resource in the universe.",
    rating: 4.7,
    category: "Science Fiction",
    cover: bookPlaceholder,
  },
  {
    id: 12,
    title: "1984",
    author: "George Orwell",
    description:
      "A dystopian novel that delves into the consequences of totalitarianism, surveillance, and repression of individual freedom.",
    rating: 4.8,
    category: "Science Fiction",
    cover: bookPlaceholder,
  },
  {
    id: 13,
    title: "Neuromancer",
    author: "William Gibson",
    description:
      "A cyberpunk novel set in a world of virtual reality and artificial intelligence, where a washed-up computer hacker is hired for a high-stakes mission.",
    rating: 4.3,
    category: "Science Fiction",
    cover: bookPlaceholder,
  },
  {
    id: 14,
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    description:
      "A journalist and a hacker investigate the decades-old disappearance of a young woman from a wealthy family, uncovering dark secrets along the way.",
    rating: 4.5,
    category: "Mystery",
    cover: bookPlaceholder,
  },
  {
    id: 15,
    title: "Sherlock Holmes: The Complete Novels and Stories",
    author: "Arthur Conan Doyle",
    description:
      "The complete collection of Sherlock Holmes detective stories, following the brilliant detective as he solves complex cases with his sharp mind and unique methods.",
    rating: 4.8,
    category: "Mystery",
    cover: bookPlaceholder,
  },
  {
    id: 16,
    title: "Gone Girl",
    author: "Gillian Flynn",
    description:
      "A thriller about a woman who goes missing on her fifth wedding anniversary, and the secrets that slowly unravel about her marriage and the people around her.",
    rating: 4.1,
    category: "Mystery",
    cover: bookPlaceholder,
  },
  {
    id: 17,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description:
      "Elizabeth Bennet and Mr. Darcy struggle with their mutual attraction, societal expectations, and misunderstandings in 19th-century England.",
    rating: 4.7,
    category: "Romance",
    cover: bookPlaceholder,
  },
  {
    id: 18,
    title: "The Fault in Our Stars",
    author: "John Green",
    description:
      "Two teenagers with cancer form a deep bond after meeting at a cancer support group, leading to a story about love, loss, and living in the moment.",
    rating: 4.4,
    category: "Romance",
    cover: bookPlaceholder,
  },
  {
    id: 19,
    title: "Me Before You",
    author: "Jojo Moyes",
    description:
      "A woman becomes a caregiver for a wealthy man who has been paralyzed from the neck down, and their relationship evolves into a profound love story.",
    rating: 4.2,
    category: "Romance",
    cover: bookPlaceholder,
  },
  {
    id: 20,
    title: "The Shining",
    author: "Stephen King",
    description:
      "A family stays at the remote Overlook Hotel, where the father, Jack Torrance, begins to unravel mentally due to the hotel's dark forces.",
    rating: 4.5,
    category: "Horror",
    cover: bookPlaceholder,
  },
  {
    id: 21,
    title: "Dracula",
    author: "Bram Stoker",
    description:
      "The legendary story of Count Dracula's attempt to move from Transylvania to England in order to spread the undead curse, as told through letters, diary entries, newspaper clippings, and a ship's log.",
    rating: 4.6,
    category: "Horror",
    cover: bookPlaceholder,
  },
  {
    id: 22,
    title: "Frankenstein",
    author: "Mary Shelley",
    description:
      "Victor Frankenstein creates a living being from body parts, but the creature is rejected by society, leading to tragic consequences.",
    rating: 4.3,
    category: "Horror",
    cover: bookPlaceholder,
  },
  {
    id: 23,
    title: "The Mountain Is You",
    author: "Brianna Wiest",
    description:
      "A guide to understanding and overcoming self-sabotage, showing how the obstacles in our lives can be the very things we need to grow.",
    rating: 4.5,
    category: "Non-Fiction",
    cover: bookPlaceholder,
  },
  {
    id: 24,
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    description:
      "A personal finance classic that contrasts the financial philosophies of Kiyosaki's two father figures, emphasizing the importance of financial education and investing.",
    rating: 4.6,
    category: "Non-Fiction",
    cover: bookPlaceholder,
  },
  {
    id: 25,
    title: "Atomic Habits",
    author: "James Clear",
    description:
      "A comprehensive guide to understanding how habits are formed and how to make tiny changes that lead to significant improvements in your life over time.",
    rating: 4.8,
    category: "Non-Fiction",
    cover: bookPlaceholder,
  },
];

const popularPicks = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    cover: bookPlaceholder,
  },
  {
    id: 12,
    title: "1984",
    author: "George Orwell",
    cover: bookPlaceholder,
  },
  {
    id: 8,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    cover: bookPlaceholder,
  },
  {
    id: 9,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    cover: bookPlaceholder,
  },
  {
    id: 4,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    cover: bookPlaceholder,
  },
  {
    id: 7,
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    cover: bookPlaceholder,
  },
  {
    id: 24,
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    cover: bookPlaceholder,
  },
  {
    id: 25,
    title: "Atomic Habits",
    author: "James Clear",
    cover: bookPlaceholder,
  },
];

export { books, popularPicks };
