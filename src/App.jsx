import { Outlet } from "react-router-dom";
import BookDetails from "./BookDetails";
import BooksPage from "./BooksPage";
import Footer from "./Footer";
import Navbar from "./Navbar";
import WelcomePage from "./WelcomePage";

export default function App() {
  return (
    <>
      <Navbar />
        <Outlet />
      {/* <BookDetails /> */}
      {/* <WelcomePage /> */}
      {/* <BooksPage /> */}
      <Footer />
    </>
  )
}