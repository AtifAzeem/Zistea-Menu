// import { Routes, Route } from "react-router-dom";

// import Splash from "./pages/Splash";
// import Home from "./pages/Home";
// import FoodDetails from "./pages/FoodDetails";
// import Search from "./pages/Search";
// import Cart from "./pages/Cart";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Splash />} />
//       <Route path="/home" element={<Home />} />
//       <Route path="/food/:id" element={<FoodDetails />} />
//       <Route path="/search" element={<Search />} />
//       <Route path="/cart" element={<Cart />} />
//     </Routes>
//      <CartBar />
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import CartBar from "./components/CartBar";

import Splash from "./pages/Splash";
import Home from "./pages/Home";
import FoodDetails from "./pages/FoodDetails";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import TableEntry from "./pages/TableEntry";
function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Home />} />
        <Route path="/food/:id" element={<FoodDetails />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
      </Routes> */}
      <Routes>
        <Route path="/" element={<Splash />} />

        <Route path="/home" element={<Home />} />

        {/* NEW */}
        <Route path="/table/:tableId" element={<TableEntry />} />

        <Route path="/food/:id" element={<FoodDetails />} />

        <Route path="/search" element={<Search />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>

      <CartBar />
    </>
  );
}

export default App;