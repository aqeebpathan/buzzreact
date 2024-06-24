// Importing necessary hooks and components from React and custom sources
import { useCallback, useEffect, useState } from "react";

import { BsBookmark } from "react-icons/bs";

// Custom hook for fetching news data
import useNewsData from "../hooks/useNewsData";
// Utility functions for data manipulation
import extractFirstName from "../utils/extractFirstName";
import formatDateString from "../utils/formatDate";
// Pagination component for handling page navigation
import Pagination from "./Pagination";
// Spinner component for loading state feedback
import Spinner from "./Spinner";

// NewsFeed component responsible for rendering news articles and pagination
function NewsFeed() {
  // State management
  const [currentPage, setCurrentPage] = useState(1);

  // Custom hook to fetch news data
  const { news, category, searchTerm, loading, error } = useNewsData();

  // Constants and calculations for pagination
  const pageSize = 7;
  const totalArticles = news.length;
  const totalPages = Math.ceil(totalArticles / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentArticles = news.slice(startIndex, endIndex);

  // Callback function to handle page changes
  const onPageChange = useCallback(
    (pageNumber) => setCurrentPage(pageNumber),
    []
  );

  // Effect to reset to page 1 when total number of articles changes
  useEffect(() => {
    setCurrentPage(1);
  }, [totalArticles, category, searchTerm]);

  // Conditional rendering based on loading state
  if (loading) {
    return (
      <div className="flex justify-center mt-36 sm:mt-24 mb-[50vh]">
        <Spinner />
      </div>
    );
  }

  // Conditional rendering based on error state
  if (error) {
    return <FetchStateFeedback>{error.message}</FetchStateFeedback>;
  }

  // Conditional rendering when no news articles are available
  if (news?.length === 0) {
    return <FetchStateFeedback>No news articles available.</FetchStateFeedback>;
  }

  // Render news articles and pagination if data is available
  return (
    <div className="max-w-[63rem] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-6 transition">
        {/* Mapping through current articles to display each article */}
        {currentArticles?.map((article, index) => (
          <div
            className="max-w-full sm:max-w-xs md:max-w-full lg:max-w-xs p-3 bg-[#5a5859] border border-[rgb(120,120,120)] rounded-[18px] transition hover:scale-105"
            key={article.publishedAt + index}
          >
            <img
              src={article.image}
              alt={article.title}
              loading="lazy"
              className="w-full h-[10rem] md:h-32 lg:h-[10rem] object-cover rounded-2xl shadow-md"
            />
            <a
              href={article.url}
              target="_blank"
              rel="noreferrer noopener"
              className="max-h-36 overflow-hidden cursor-pointer"
            >
              <p className="font-medium truncate tracking-wide leading-tight mt-3 mx-1">
                {article.title}
              </p>
              <p className="text-sm mt-2 mb-3 text-white/60 truncate-2 tracking-wide font-light leading-snug">
                {article.description}
              </p>
            </a>

            <div className="flex justify-between bg-[#484848] border border-[rgb(106,106,106)] rounded-2xl p-3">
              <div className="flex gap-3 items-center">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  className="w-10 h-10 rounded-lg object-cover"
                />
                <div>
                  <p className="text-[13px] font-medium">
                    {extractFirstName(article.source.name)}
                  </p>
                  <p className="text-[12px] text-[#aaaaaa] leading-tight">
                    {formatDateString(article.publishedAt)}
                  </p>
                </div>
              </div>
              <button className="text-white/70">
                <BsBookmark />
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Rendering pagination component */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}

// Component to render feedback when no news articles are available
function FetchStateFeedback({ children }) {
  return (
    <div className="mt-20 text-lg">
      <p className="text-center">{children}</p>
    </div>
  );
}

// Exporting the NewsFeed component as the default export
export default NewsFeed;
