import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WelcomePage from './WelcomePage.jsx';
import BooksPage from './BooksPage.jsx';
import BookDetails from './BookDetails.jsx';
import ErrorPage from './ErrorPage.jsx';
import CategoryBooksPage from './CategoryBooksPage.jsx';
import NoBookSelected from './NoBookSelected.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {path:'/', element: <WelcomePage />},
      {
        path:'/books', element: <BooksPage />,
        children: [
          {path:'/books/', element:<CategoryBooksPage />},
          {path:'/books/:category', element:<CategoryBooksPage />}
        ]
      },
      {path:'/book', element: <NoBookSelected />},
      {path:'/book/:id', element: <BookDetails />},
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
