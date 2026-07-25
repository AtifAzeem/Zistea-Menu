import SearchBar from "./SearchBar";
import CategoryBar from "./CategoryBar";

export default function StickyMenuHeader({
  categories,
  selectedCategory,
  onSelect,
  search,
  setSearch,
}) {
  return (
    <div className="sticky top-0 z-40 bg-[#FFF9F2] shadow-sm">
      <div className="px-4 pt-3 pb-2">
        <SearchBar
          value={search}
          onChange={setSearch}
        />
      </div>

      <CategoryBar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelect={onSelect}
      />
    </div>
  );
}