import { useContext } from "react";
import { AppContext } from "../AppContext";

function Button({ children, cate }) {
  const { handleCategoryChange, category } = useContext(AppContext);

  const handleClick = (newCategory) => {
    handleCategoryChange(newCategory);
  };

  return (
    <button
      onClick={() => handleClick(cate)}
      className={`py-2 px-5 border border-[#5a5859] text-[13px] rounded-2xl text-[#aaaaaa] hover:text-white/90 transition  ${
        category === cate ? "bg-[#5a5859] text-white" : ""
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
