// // import FoodCard from "./FoodCard";

// // function CategorySection({ title, items }) {
// //   return (
// //     <section
// //         id={title}
// //         className="scroll-mt-36 px-5 py-3"
// //     >
// //       <h2 className="mb-4 text-2xl font-bold text-gray-900">
// //         {title}
// //       </h2>

// //       {items.map((item) => (
// //         <FoodCard
// //           key={item.id}
// //           item={item}
// //         />
// //       ))}
// //     </section>
// //   );
// // }

// // export default CategorySection;

// import FoodCard from "./FoodCard";

// function CategorySection({ title, items }) {
//   return (
//     <section className="px-5 py-4">
//       <div className="mb-6">
//         <h2 className="text-2xl font-bold text-gray-900">
//           {title}
//         </h2>

//         <p className="mt-1 text-sm text-gray-500">
//           {items.length} {items.length === 1 ? "Item" : "Items"}
//         </p>
//       </div>

//       <div className="space-y-2">
//         {items.map((item) => (
//           <FoodCard
//             key={item.id}
//             item={item}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

// export default CategorySection;

// import FoodCard from "./FoodCard";
// function CategorySection({ items }) {
//   return (
//     <div className="space-y-2">
//       {items.map((item) => (
//         <FoodCard
//           key={item.id}
//           item={item}
//         />
//       ))}
//     </div>
//   );
// }

// export default CategorySection;

import FoodCard from "./FoodCard";

function CategorySection({ items }) {
  return (
    <div className="space-y-2">
      {items.map((item) => (
        <FoodCard
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
}

export default CategorySection;