// import menu from "../data/menu.json";
// import CategorySection from "./CategorySection";

// function MenuContainer() {
//   return (
//     <>
//       {menu.categories.map((category) => (
//         <CategorySection
//           key={category.id}
//           title={category.name}
//           items={category.items}
//         />
//       ))}
//     </>
//   );
// }

// export default MenuContainer;

// import menu from "../data/menu.json";
// import CategorySection from "./CategorySection";

// function MenuContainer() {
//   return (
//     <>
//       {menu.categories.map((category) => (
//         <CategorySection
//           key={category.name}
//           title={category.name}
//           items={category.items}
//         />
//       ))}
//     </>
//   );
// }

// export default MenuContainer;

// import CategorySection from "./CategorySection";

// function MenuContainer({ category }) {
//   return (
//     <CategorySection
//       title={category.name}
//       items={category.items}
//     />
//   );
// }

// export default MenuContainer;

// import CategorySection from "./CategorySection";
// function MenuContainer({ category }) {
//   return (
//     <div className="px-5">
//       <div className="sticky top-[140px] z-10 bg-[#FFFDF8] py-4">
//         <h2 className="text-2xl font-bold">
//           {category.name}
//         </h2>

//         <p className="text-sm text-gray-500">
//           {category.items.length} Items
//         </p>
//       </div>

//       <CategorySection items={category.items} />
//     </div>
//   );
// }

// export default MenuContainer;

// import CategorySection from "./CategorySection";

// function MenuContainer({ category }) {
//   return (
//     <div className="px-5 pt-4">
//       <div className="mb-6">
//         <h2 className="text-3xl font-bold text-gray-900">
//           {category.name}
//         </h2>

//         <p className="mt-1 text-sm text-gray-500">
//           {category.items.length} Items
//         </p>
//       </div>

//       <CategorySection
//         items={category.items}
//       />
//     </div>
//   );
// }

// export default MenuContainer;

// import CategorySection from "./CategorySection";

// function MenuContainer({ category, search }) {
//   const query = search.trim().toLowerCase();

//   const filteredItems = category.items.filter((item) => {
//     if (!query) return true;

//     return (
//       item.name.toLowerCase().includes(query) ||
//       (item.description ?? "").toLowerCase().includes(query)
//     );
//   });

//   return (
//     <div className="px-4 pt-3 pb-6">
//       {/* Header */}

//       <div className="mb-4">
//         <h2 className="text-2xl font-bold text-gray-900">
//           {category.name}
//         </h2>

//         <p className="mt-0.5 text-sm text-gray-500">
//           {filteredItems.length}{" "}
//           {filteredItems.length === 1 ? "Item" : "Items"}
//         </p>
//       </div>

//       {/* Empty State */}

//       {filteredItems.length === 0 ? (
//         <div
//           className="
//             flex
//             flex-col
//             items-center
//             justify-center

//             rounded-2xl

//             border
//             border-dashed
//             border-gray-300

//             bg-white

//             py-12

//             text-center
//           "
//         >
//           <p className="text-lg font-semibold text-gray-700">
//             No items found
//           </p>

//           <p className="mt-2 text-sm text-gray-500">
//             Try searching for something else.
//           </p>
//         </div>
//       ) : (
//         <CategorySection
//           items={filteredItems}
//         />
//       )}
//     </div>
//   );
// }

// export default MenuContainer;

import CategorySection from "./CategorySection";

function MenuContainer({
  category,
  searching,
  searchResults,
}) {
  const items = searching
    ? searchResults.map((result) => result.item)
    : category.items;

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