// Importing the Button component
import Button from "./Button";

// Array of categories with their names and values
const categories = [
  { name: "General", value: "general" },
  { name: "Business", value: "business" },
  { name: "Entertainment", value: "entertainment" },
  { name: "Health", value: "health" },
  { name: "Science", value: "science" },
  { name: "Sports", value: "sports" },
  { name: "Technology", value: "technology" },
];

// CategoryFilter component to display category filter buttons
function CategoryFilter() {
  return (
    <div className="flex justify-center  mb-8">
      <div className="flex flex-row gap-6 md:gap-8 overflow-y-auto scrollbar-none">
        {/* Mapping through categories to render Button components */}
        {categories.map((category, index) => (
          <Button key={index} cate={category.value}>
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  );
}

// Exporting CategoryFilter component as the default export
export default CategoryFilter;
