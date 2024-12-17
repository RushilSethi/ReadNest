import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WelcomePage from './WelcomePage.jsx';
import BooksPage from './BooksPage.jsx';
import BookDetails from './BookDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path:'/', element: <WelcomePage />},
      {path:'/books', element: <BooksPage />},
      {path:'/books/:id', element: <BookDetails />},
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
