import { useContext } from "react";
import CategoryFilter from "./CategoryFilter";
import HeaderSection from "./HeaderSection";
import NewsFeed from "./NewsFeed";
import Searchbar from "./SearchBar";
import { AppContext } from "../AppContext";

function Main() {
  const { searchTerm } = useContext(AppContext);

  return (
    <main>
      <div className="max-w-6xl mx-auto">
        <HeaderSection />
        <Searchbar />
        {!searchTerm && <CategoryFilter />}
        <NewsFeed />
      </div>
    </main>
  );
}

export default Main;
