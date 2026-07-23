// function CategoryBar({
//   categories,
//   selectedCategory,
//   onSelect,
// }) {
//   return (
//     // <div className="sticky top-[72px] z-10 bg-[#FFFDF8] px-5 py-3">
//     <div className="bg-[#FFFDF8] px-5 py-3">
//       <div className="flex gap-3 overflow-x-auto">
//         {categories.map((category) => {
//           const active =
//             category.name === selectedCategory.name;

//           return (
//             <button
//               key={category.name}
//               onClick={() => onSelect(category)}
//               className={`
//                 whitespace-nowrap
//                 rounded-full
//                 px-4
//                 py-2
//                 text-sm
//                 font-medium
//                 transition

//                 ${
//                   active
//                     ? "bg-amber-600 text-white shadow"
//                     : "border border-gray-200 bg-white hover:bg-amber-100"
//                 }
//               `}
//             >
//               {category.name}
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default CategoryBar;

function CategoryBar({
  categories,
  selectedCategory,
  onSelect,
}) {
  return (
    <div className="bg-[#FFFDF8] px-4 pb-2">
      <div
        className="
          flex
          gap-2
          overflow-x-auto
          scrollbar-hide
        "
      >
        {categories.map((category) => {
          const active =
            category.name === selectedCategory.name;

          return (
            <button
              key={category.name}
              onClick={() => onSelect(category)}
              className={`
                shrink-0
                whitespace-nowrap

                rounded-full

                px-3.5
                py-1.5

                text-sm
                font-medium

                transition-all
                duration-200

                ${
                  active
                    ? `
                      bg-[#D4B46A]
                      text-white
                      shadow-sm
                    `
                    : `
                      border
                      border-[#E7E2D8]
                      bg-white
                      text-gray-700

                      hover:border-[#D4B46A]
                      hover:bg-[#FFF8EA]
                    `
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