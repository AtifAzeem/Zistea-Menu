import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

import { CartProvider } from "./context/CartContext";
import { MenuProvider } from "./context/MenuContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MenuProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </MenuProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById("root")).render(
//     <BrowserRouter>
//       <MenuProvider>
//         <TableProvider>
//           <CartProvider>
//             <App />
//           </CartProvider>
//         </TableProvider>
//       </MenuProvider>
//     </BrowserRouter>
// );