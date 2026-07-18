// function RestaurantHeader() {
//   return (
//     <header className="px-6 pt-8 pb-6 text-center">

//       <img
//         src="/images/logo.png"
//         alt="Zistea"
//         className="mx-auto h-20 w-20 object-contain"
//       />

//       <h1 className="mt-4 text-3xl font-bold tracking-wide text-amber-900">
//         ZISTEA
//       </h1>

//       <p className="mt-1 text-sm text-gray-500">
//         Premium Tea & Cafe
//       </p>

//       <div className="mx-auto mt-5 inline-flex items-center gap-2 rounded-full bg-amber-100 px-5 py-2">

//         <span>🪑</span>

//         <span className="font-medium">
//           Table 07
//         </span>

//       </div>

//     </header>
//   );
// }

// export default RestaurantHeader;

import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { MdTableRestaurant } from "react-icons/md";

function RestaurantHeader() {
  return (
    <header className="px-5 pt-6 pb-4">
      <div className="rounded-3xl bg-gradient-to-br from-amber-50 to-orange-100 p-6 shadow-md">
        {/* Logo */}
        <img
          src="/images/logo.png"
          alt="ZISTEA Logo"
          className="mx-auto h-20 w-20 object-contain"
        />

        {/* Restaurant Name */}
        <h1 className="mt-4 text-center text-3xl font-bold tracking-wide text-amber-900">
          ZISTEA
        </h1>

        <p className="mt-1 text-center text-sm text-gray-600">
          Premium Tea & Cafe
        </p>

        {/* Location */}
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-600">
          <FaMapMarkerAlt className="text-amber-600" />
          <span>Near Main Entrance</span>
        </div>

        {/* Divider */}
        <div className="my-5 h-px bg-amber-200"></div>

        {/* Table & Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
            <MdTableRestaurant className="text-xl text-amber-700" />
            <span className="font-medium text-gray-800">
              Table 07
            </span>
          </div>

          <div className="flex items-center gap-1 rounded-full bg-white px-4 py-2 shadow-sm">
            <FaStar className="text-yellow-500" />
            <span className="font-semibold">4.8</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default RestaurantHeader;