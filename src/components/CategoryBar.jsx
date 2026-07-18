function CategoryBar({
  categories,
  selectedCategory,
  onSelect,
}) {
  return (
    // <div className="sticky top-[72px] z-10 bg-[#FFFDF8] px-5 py-3">
    <div className="bg-[#FFFDF8] px-5 py-3">
      <div className="flex gap-3 overflow-x-auto">
        {categories.map((category) => {
          const active =
            category.name === selectedCategory.name;

          return (
            <button
              key={category.name}
              onClick={() => onSelect(category)}
              className={`
                whitespace-nowrap
                rounded-full
                px-4
                py-2
                text-sm
                font-medium
                transition

                ${
                  active
                    ? "bg-amber-600 text-white shadow"
                    : "border border-gray-200 bg-white hover:bg-amber-100"
                }
              `}
            >
              {category.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryBar;