import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function CartHeader() {
  const navigate = useNavigate();

  return (
    <div className="mb-5 rounded-2xl bg-white p-4 shadow-sm">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-3"
      >
        <FaArrowLeft className="text-lg" />

        <h1 className="text-2xl font-bold">
          Cart
        </h1>
      </button>
    </div>
  );
}

export default CartHeader;