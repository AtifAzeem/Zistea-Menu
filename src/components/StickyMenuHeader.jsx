import SearchBar from "./SearchBar";
import CategoryBar from "./CategoryBar";

function StickyMenuHeader({
  categories,
  selectedCategory,
  onSelect,
}) {
  return (
    <div className="sticky top-0 z-30 bg-[#FFFDF8] shadow-sm">
      <SearchBar />

      <CategoryBar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelect={onSelect}
      />
    </div>
  );
}

export default StickyMenuHeader;