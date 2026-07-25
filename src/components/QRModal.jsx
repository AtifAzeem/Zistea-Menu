import { QRCodeSVG } from "qrcode.react";

function QRModal({ payload, onDone }) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 text-center">
        <h2 className="text-xl font-bold mb-4">
          Show this QR to the Staff
        </h2>

        <QRCodeSVG
          value={JSON.stringify(payload)}
          size={240}
        />

        <button
          onClick={onDone}
          className="mt-6 bg-green-600 text-white px-6 py-2 rounded"
        >
          I've shown this to the Staff
        </button>
      </div>
    </div>
  );
}

export default QRModal;