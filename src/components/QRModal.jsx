// import { QRCodeSVG } from "qrcode.react";

// function QRModal({ payload, onClose }) {
//   return (
//     <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
//       <div className="bg-white rounded-2xl p-6 w-96 text-center">

//         <h2 className="text-2xl font-bold mb-4">
//           Order QR
//         </h2>

//         <QRCodeSVG
//           value={JSON.stringify(payload)}
//           size={250}
//         />

//         <p className="mt-5 text-gray-600">
//           Show this QR to your waiter
//         </p>

//         <button
//           onClick={onClose}
//           className="mt-6 w-full bg-green-600 text-white py-3 rounded-xl"
//         >
//           Done
//         </button>

//       </div>
//     </div>
//   );
// }

// export default QRModal;

import { QRCodeSVG } from "qrcode.react";

function QRModal({ payload, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 text-center">
        <h2 className="text-xl font-bold mb-4">
          Show this QR to the waiter
        </h2>

        <QRCodeSVG
          value={JSON.stringify(payload)}
          size={240}
        />

        <button
          onClick={onClose}
          className="mt-6 bg-green-600 text-white px-6 py-2 rounded"
        >
          Done
        </button>
      </div>
    </div>
  );
}

export default QRModal;