import Layout from "../components/Layout";
import CartHeader from "../components/CartHeader";
import CartItemsCard from "../components/CartItemsCard";
import BillCard from "../components/BillCard";
import GenerateQRButton from "../components/GenerateQRButton";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { createOrderPayload } from "../utils/orderPayload";
import QRModal from "../components/QRModal";
import ConfirmResetModal from "../components/ConfirmResetModal";

function Cart() {
  const { cartItems, tableNumber } = useCart();
  // const [showQR, setShowQR] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const payload = createOrderPayload(
      tableNumber,
      cartItems
  );
  // console.log("Payload:", JSON.stringify(payload, null, 2));
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
              onDone={() => {
                  setShowQR(false);
                  setShowConfirmation(true);
              }}
            />
          )}
          {showConfirmation && (
              <ConfirmResetModal
                  onCancel={() => {
                      setShowConfirmation(false);
                      setShowQR(true);
                  }}
              />
          )}
      </div>
  </Layout>
  );
}

export default Cart;