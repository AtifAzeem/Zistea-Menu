import { FaStar } from "react-icons/fa";
import { MdTableRestaurant } from "react-icons/md";
import { HiOutlineBars3 } from "react-icons/hi2";

import { useTable } from "../context/TableContext";
import restaurant from "../data/restaurant.json";

function RestaurantHeader({ onMenuClick }) {
  const { tableNumber } = useTable();

  return (
    <header>
      <div
        className="
          border-b
          border-[#3A3122]
          bg-[#101010]
          px-5
          pt-5
          pb-6
          shadow-[0_20px_60px_rgba(0,0,0,0.45)]
        "
      >
        {/* Top row: Menu + Rating */}
        <div className="flex items-center justify-between">
          <button
            onClick={onMenuClick}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-[#3A3122]
              bg-[#181818]
              transition-all
              duration-200
              hover:bg-[#202020]
              active:scale-95
            "
          >
            <HiOutlineBars3 size={18} className="text-[#D4B46A]" />
          </button>

          <div
            className="
              flex
              items-center
              gap-1.5
              rounded-full
              border
              border-[#3A3122]
              bg-[#181818]
              px-3
              py-1.5
            "
          >
            <FaStar className="text-xs text-[#D4B46A]" />
            <span className="text-sm font-semibold text-[#F6F3EA]">
              {restaurant.rating}
            </span>
          </div>
        </div>

        {/* Brand */}
        <div className="mt-4 text-center">
          <h1
            className="
              text-[30px]
              tracking-[0.08em]
              text-[#D4B46A]
              select-none
            "
            style={{
              fontFamily: '"Metropolis 1920", serif',
            }}
          >
            {restaurant.name}
          </h1>

          <p
            className="
              mt-1.5
              text-[10px]
              uppercase
              tracking-[0.3em]
              text-[#B9B3A6]
              select-none
            "
          >
            {restaurant.tagline}
          </p>
        </div>

        {/* Table */}
        <div className="mt-4 flex justify-center">
          <div
            className="
              flex
              items-center
              gap-1.5
              rounded-full
              border
              border-[#D4B46A]
              bg-[#181818]
              px-4
              py-1.5
              shadow-[0_0_15px_rgba(212,180,106,0.08)]
            "
          >
            <MdTableRestaurant className="text-base text-[#D4B46A]" />
            <span
              className="
                text-xs
                uppercase
                tracking-[0.15em]
                text-[#F6F3EA]
              "
            >
              Table{" "}
              {tableNumber ? String(tableNumber).padStart(2, "0") : "--"}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default RestaurantHeader;