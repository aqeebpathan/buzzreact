// Import necessary hooks from React
import { useContext, useRef } from "react";
// Import AppContext to access global state
import { AppContext } from "../AppContext";

// Searchbar component for handling user search input
function Searchbar() {
  // Ref to the input element for focusing
  const inputRef = useRef(null);
  // Accessing handleSearchTermChange function from AppContext
  const { handleSearchTermChange } = useContext(AppContext);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Extracting search query from the form input
    const searchQuery = e.target.search.value;
    // Calling handleSearchTermChange function with the search query
    handleSearchTermChange(searchQuery);

    // Blur the input field after submission
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  // Render the search form
  return (
    <div className="flex justify-center mb-8">
      <form onSubmit={handleSubmit} className="group">
        {/* Search icon SVG */}
        <svg viewBox="0 0 24 24" aria-hidden="true" className="search-icon">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
        {/* Input field for user to enter search query */}
        <input
          type="text"
          placeholder="Search by Topic or Keyword."
          name="search"
          className="input min-w-72 sm:min-w-[360px]"
          ref={inputRef} // Assigning the ref to inputRef for focusing
        />
      </form>
    </div>
  );
}

// Export Searchbar component as the default export
export default Searchbar;
