function GenerateQRButton({ onClick }) {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50">
      <button
        onClick={onClick}
        className="
          w-full
          rounded-2xl
          bg-green-600
          py-4
          font-semibold
          text-white
          shadow-xl
        "
      >
        Generate Order QR →
      </button>
    </div>
  );
}

export default GenerateQRButton;