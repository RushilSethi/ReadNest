import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import AddBookPage from "./AddBook/AddBookPage.jsx";
import AddNewBookForm from "./AddBook/AddNewBookForm.jsx";
import AddExistingToPopular from "./AddBook/AddExistingToPopular.jsx";

export default function App() {
  return (
    <>
      <Navbar />
        {/* <Outlet /> */}
        {/* <AddBookPage /> */}
        {/* <AddNewBookForm /> */}
        <AddExistingToPopular />
      <Footer />
    </>
  )
}