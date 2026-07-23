// import { FiSearch } from "react-icons/fi";

// function SearchBar() {
//   return (
//     // <div className="sticky top-0 z-20 bg-[#FFFDF8] px-5 py-3">
//     <div className="bg-[#FFFDF8] px-5 py-3">
//       <button
//         className="
//           flex
//           w-full
//           items-center
//           gap-3
//           rounded-xl
//           border
//           border-gray-200
//           bg-white
//           px-4
//           py-3
//           shadow-sm
//           transition
//           hover:shadow-md
//         "
//       >
//         <FiSearch className="text-xl text-gray-500" />

//         <span className="text-gray-500">
//           Search food & drinks
//         </span>
//       </button>
//     </div>
//   );
// }

// export default SearchBar;

// import { FiSearch } from "react-icons/fi";

// function SearchBar({ value, onChange }) {
//   return (
//     <div className="bg-[#FFFDF8] px-4 py-2">
//       <div
//         className="
//           flex
//           h-10
//           items-center
//           gap-3

//           rounded-xl
//           border
//           border-gray-200

//           bg-white

//           px-3

//           shadow-sm

//           focus-within:border-[#D4B46A]
//           focus-within:ring-2
//           focus-within:ring-[#D4B46A]/20
//         "
//       >
//         <FiSearch
//           className="text-lg text-gray-400"
//         />

//         <input
//           type="text"
//           value={value}
//           onChange={(e) => onChange(e.target.value)}
//           placeholder="Search food & drinks"
//           className="
//             w-full
//             bg-transparent
//             text-sm
//             outline-none
//             placeholder:text-gray-400
//           "
//         />
//       </div>
//     </div>
//   );
// }

// export default SearchBar;

import { FiSearch } from "react-icons/fi";

function SearchBar({ value, onChange }) {
  return (
    <div className="bg-[#FFFDF8] px-4 py-2">
      <div
        className="
          flex
          h-10
          items-center
          gap-3

          rounded-xl
          border
          border-gray-200

          bg-white

          px-3

          shadow-sm

          transition-all

          focus-within:border-[#D4B46A]
          focus-within:ring-2
          focus-within:ring-[#D4B46A]/20
        "
      >
        <FiSearch className="text-lg text-gray-400" />

        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search food & drinks"
          className="
            w-full
            bg-transparent

            text-sm

            outline-none

            placeholder:text-gray-400
          "
        />
      </div>
    </div>
  );
}

export default SearchBar;