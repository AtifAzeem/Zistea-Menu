// // function BillCard() {
// //   return (
// //     <div className="mb-24 rounded-2xl bg-white p-5 shadow-sm">
// //       Bill
// //     </div>
// //   );
// // }

// // export default BillCard;

// import { useCart } from "../context/CartContext";

// function BillCard() {
//   const { subtotal } = useCart();

//   const gst = Math.round(subtotal * 0.05); // 5% GST
//   const deliveryCharge = 0;
//   const grandTotal = subtotal + gst + deliveryCharge;

//   return (
//     <div className="mb-24 rounded-2xl bg-white p-5 shadow-sm">
//       <h2 className="mb-4 text-lg font-semibold text-gray-800">
//         Bill Details
//       </h2>

//       <div className="space-y-3 text-gray-700">
//         <div className="flex justify-between">
//           <span>Subtotal</span>
//           <span>₹{subtotal}</span>
//         </div>

//         <div className="flex justify-between">
//           <span>GST (5%)</span>
//           <span>₹{gst}</span>
//         </div>

//         <div className="flex justify-between">
//           <span>Delivery</span>
//           <span className="font-medium text-green-600">FREE</span>
//         </div>

//         <hr className="my-3" />

//         <div className="flex justify-between text-lg font-bold">
//           <span>Total</span>
//           <span>₹{grandTotal}</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BillCard;

import { useCart } from "../context/CartContext";

function BillCard() {
  const { subtotal, serviceCharge, grandTotal } = useCart();

  return (
    <div className="mb-24 rounded-2xl bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold text-gray-800">
        Bill Details
      </h2>

      <div className="space-y-3 text-gray-700">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>

        <div className="flex justify-between">
          <span>Service Charge</span>
          <span className="font-medium text-green-600">
            {serviceCharge === 0 ? "FREE" : `₹${serviceCharge}`}
          </span>
        </div>

        <hr className="my-3" />

        <div className="flex justify-between text-lg font-bold text-gray-900">
          <span>Total</span>
          <span>₹{grandTotal}</span>
        </div>
      </div>
    </div>
  );
}

export default BillCard;