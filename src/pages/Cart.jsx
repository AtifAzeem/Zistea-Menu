// import Layout from "../components/Layout";
// import { useCart } from "../context/CartContext";
// import CartItem from "../components/CartItem";

// function Cart() {
//   const { cartItems } = useCart();

//   return (
//     <Layout>
//       <div className="px-5 py-6">
//         <h1 className="mb-10 text-3xl font-bold">
//           Cart
//         </h1>

//         {cartItems.length === 0 ? (
//           <p className="text-center text-gray-500">
//             Your cart is empty.
//           </p>
//         ) : (
//           cartItems.map((item) => (
//             <CartItem
//               key={item.id}
//               item={item}
//             />
//           ))
//         )}
//       </div>
//     </Layout>
//   );
// }

// export default Cart;

import Layout from "../components/Layout";
import CartHeader from "../components/CartHeader";
import CartItemsCard from "../components/CartItemsCard";
import BillCard from "../components/BillCard";
import GenerateQRButton from "../components/GenerateQRButton";
import { useCart } from "../context/CartContext";
import { useTable } from "../context/TableContext";
import { useState } from "react";
import { createOrderPayload } from "../utils/orderPayload";
import QRModal from "../components/QRModal";

function Cart() {
  const { cartItems } = useCart();
  const { tableNumber } = useTable();
  const [showQR, setShowQR] = useState(false);

  const payload = createOrderPayload(
      tableNumber,
      cartItems
  );
  console.log("Payload:", JSON.stringify(payload, null, 2));
  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen p-4">

          <CartHeader />

          <CartItemsCard />

          <BillCard />

          <GenerateQRButton
            onClick={() => setShowQR(true)}
          />
          {showQR && (
            <QRModal
              payload={payload}
              onClose={() => setShowQR(false)}
            />
          )}

      </div>
  </Layout>
  );
}

export default Cart;