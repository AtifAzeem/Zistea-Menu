import CategorySection from "./CategorySection";

function MenuContainer({
  category,
  searching,
  searchResults,
}) {
  const items = (
    searching
      ? searchResults.map((result) => result.item)
      : category.items
  )
    .slice()
    .sort((a, b) => {
      if (a.available === b.available) return 0;
      return a.available ? -1 : 1;
    });

  return (
    <div className="px-4 pt-3 pb-6">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-900">
          {searching ? "Search Results" : category.name}
        </h2>

        <p className="mt-0.5 text-sm text-gray-500">
          {items.length} {items.length === 1 ? "Item" : "Items"}
        </p>
      </div>

      {/* Empty State */}
      {items.length === 0 ? (
        <div
          className="
            flex
            flex-col
            items-center
            justify-center
            rounded-2xl
            border
            border-dashed
            border-gray-300
            bg-white
            py-12
            text-center
          "
        >
          <p className="text-lg font-semibold text-gray-700">
            No items found
          </p>

          <p className="mt-2 text-sm text-gray-500">
            Try searching for something else.
          </p>
        </div>
      ) : (
        <CategorySection items={items} />
      )}
    </div>
  );
}

export default MenuContainer;