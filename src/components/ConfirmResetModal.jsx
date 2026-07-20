import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ConfirmResetModal({ onCancel }) {
    const navigate = useNavigate();
    const { clearCart } = useCart();

    const handleConfirm = () => {
        clearCart();
        navigate("/home");
    };

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-6 w-96">

                <h2 className="text-2xl font-bold mb-4">
                    Order Sent?
                </h2>

                <p className="text-gray-600">
                    Has the waiter scanned your QR code?
                </p>

                <div className="mt-8 flex gap-4">

                    <button
                        onClick={onCancel}
                        className="flex-1 rounded-xl border py-3"
                    >
                        Not Yet
                    </button>

                    <button
                        onClick={handleConfirm}
                        className="flex-1 rounded-xl bg-green-600 text-white py-3"
                    >
                        Yes
                    </button>

                </div>

            </div>
        </div>
    );
}

export default ConfirmResetModal;