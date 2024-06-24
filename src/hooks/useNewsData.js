// Importing necessary hooks from React
import { useContext, useEffect } from "react";
// Importing the AppContext for accessing global state
import { AppContext } from "../AppContext";

// Custom hook for fetching news data based on context values
function useNewsData() {
  // Destructuring values from the AppContext
  const {
    news, // Array of news articles
    handleSetNews, // Function to update news state
    loading, // Loading state
    handleLoading, // Function to update loading state
    error, // Error state
    handleError, // Function to handle errors
    category, // Selected news category
    searchTerm, // Search term for news
  } = useContext(AppContext); // Accessing state values from AppContext

  // Effect to fetch news data based on category or search term changes
  useEffect(() => {
    // Async function to fetch news data
    async function fetchNewsData() {
      try {
        // Set loading to true before fetching data
        handleLoading(true);

        // API endpoint
        let url = `https://gnews.io/api/v4/top-headlines?lang=en&topic=${category}`;

        if (searchTerm) {
          url += `&q=${searchTerm}`;
        }

        url += `&token=${process.env.REACT_APP_API_KEY}`;

        // Fetch news data from the determined URL
        const response = await fetch(url);

        // Handle API rate limit error
        if (response.status === 429) {
          throw new Error(
            "Too Many Requests: You have exceeded the API rate limit."
          );
        }

        // Parse response JSON data
        const data = await response.json();

        // Throw an error if response is not OK
        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch news data.");
        }

        // Filter articles to remove unwanted data
        const filteredArticles = data.articles.filter(
          (article) =>
            article.description &&
            article.title !== "[Removed]" &&
            article.urlToImage !== null &&
            article.author !== null
        );

        // Update news state with filtered articles
        handleSetNews(filteredArticles);
        // Set loading to false after successful data fetch
        handleLoading(false);
      } catch (error) {
        // Log and handle errors during fetch operation
        console.log(error);
        handleError(error);
        // Set loading to false in case of error
        handleLoading(false);
      }
    }

    // Call fetchNewsData function when category or searchTerm changes
    fetchNewsData();
  }, [category, searchTerm]); // Dependency array to re-run effect when category or searchTerm changes

  // Return news, loading, and error states for component using this hook
  return { news, category, searchTerm, loading, error };
}

// Export the custom hook as default export
export default useNewsData;
