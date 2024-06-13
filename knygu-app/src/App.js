import React, { useState, useEffect, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import app from "./firebase/Firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import HomePage from "./pages/homepage/HomePage";
import BooksPage from "./pages/bookspage/BooksPage";
import BookDetailsPage from "./pages/bookdetailspage/BookDetails";
import Login from "./pages/loginpage/Login";
import SignUp from "./pages/signup-page/Signup";
import ScrollToTop from "./components/util/ScrollToTop";
import SearchPage from "./pages/searchpage/SearchPage";

export const UserContext = createContext({});
export const CartContext = createContext({});

const App = () => {
  const auth = getAuth(app);

  const [authenticatedUser, setAuthenticatedUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticatedUser(user);
      } else {
        setAuthenticatedUser(null);
      }
    });
  });

  return (
    <ScrollToTop>
      <UserContext.Provider value={authenticatedUser}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/book-details/:id" element={<BookDetailsPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </UserContext.Provider>
    </ScrollToTop>
  );
};

export default App;
