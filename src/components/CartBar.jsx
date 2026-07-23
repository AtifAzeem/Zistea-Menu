// import { FaShoppingCart, FaArrowRight } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { useCart } from "../context/CartContext";
// import { useLocation } from "react-router-dom";

// const location = useLocation();

// if (location.pathname === "/" || location.pathname === "/cart") {
//   return null;
// }

// function CartBar() {
//   const navigate = useNavigate();
//   const { totalItems, subtotal } = useCart();

//   return (
//     <AnimatePresence>
//       {totalItems > 0 && (
//         <motion.div
//           initial={{ y: 100, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           exit={{ y: 100, opacity: 0 }}
//           transition={{ duration: 0.25 }}
//           className="fixed bottom-4 left-4 right-4 z-50"
//         >
//           <button
//             onClick={() => navigate("/cart")}
//             className="
//               flex
//               w-full
//               items-center
//               justify-between
//               rounded-xl
//               bg-green-600
//               px-5
//               py-4
//               text-white
//               shadow-xl
//             "
//           >
//             <div className="flex items-center gap-3">
//               <FaShoppingCart className="text-lg" />

//               <div className="text-left">
//                 <p className="font-semibold">
//                   {totalItems} {totalItems === 1 ? "Item" : "Items"}
//                 </p>

//                 <p className="text-sm text-green-100">
//                   ₹{subtotal}
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-center gap-2 font-semibold">
//               View Cart
//               <FaArrowRight />
//             </div>
//           </button>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

// export default CartBar;

import { FaShoppingCart, FaArrowRight } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";

function CartBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { totalItems, subtotal } = useCart();

  if (location.pathname === "/cart") {
    return null;
  }

  return (
    <AnimatePresence>
      {totalItems > 0 && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-4 left-4 right-4 z-50"
        >
          <button
            onClick={() => navigate("/cart")}
            className="flex w-full items-center justify-between rounded-xl bg-green-600 px-5 py-4 text-white shadow-xl"
          >
            <div className="flex items-center gap-3">
              <FaShoppingCart className="text-lg" />

              <div className="text-left">
                <p className="font-semibold">
                  {totalItems} {totalItems === 1 ? "Item" : "Items"}
                </p>

                <p className="text-sm text-green-100">
                  ₹{subtotal}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 font-semibold">
              View Cart
              <FaArrowRight />
            </div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CartBar;