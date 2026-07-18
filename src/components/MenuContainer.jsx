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

import CategorySection from "./CategorySection";

function MenuContainer({ category }) {
  return (
    <div className="px-5 pt-4">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900">
          {category.name}
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          {category.items.length} Items
        </p>
      </div>

      <CategorySection
        items={category.items}
      />
    </div>
  );
}

export default MenuContainer;