// Importing necessary functions from React
import { createContext, useState } from "react";

// Creating a new context instance
export const AppContext = createContext();

// AppProvider component manages application state and provides it through context
export const AppProvider = ({ children }) => {
  // State variables managed by AppProvider
  const [news, setNews] = useState([]); // State for storing news articles
  const [category, setCategory] = useState("general"); // State for selected news category
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for error handling

  // Function to update news state
  const handleSetNews = (news) => {
    setNews(news);
  };

  // Function to update selected category state
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  // Function to update search term state
  const handleSearchTermChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  // Function to update loading state
  const handleLoading = (loading) => {
    setLoading(loading);
  };

  // Function to update error state
  const handleError = (error) => {
    setError(error);
  };

  // Providing state and functions through AppContext.Provider
  return (
    <AppContext.Provider
      value={{
        news, // Current news articles
        handleSetNews, // Function to update news state
        category, // Current selected category
        handleCategoryChange, // Function to update category state
        searchTerm, // Current search term
        handleSearchTermChange, // Function to update search term state
        loading, // Current loading state
        handleLoading, // Function to update loading state
        error, // Current error object
        handleError, // Function to update error state
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
