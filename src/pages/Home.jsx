// // // import Layout from "../components/Layout";
// // // import RestaurantHeader from "../components/RestaurantHeader";
// // // import SearchBar from "../components/SearchBar";
// // // import CategoryBar from "../components/CategoryBar";
// // // import MenuContainer from "../components/MenuContainer";

// // // function Home() {
// // //   return (
// // //     <Layout>
// // //       <RestaurantHeader />
// // //       <SearchBar />
// // //       <CategoryBar />
// // //       <MenuContainer />
// // //     </Layout>
// // //   );
// // // }

// // // export default Home;

// // import { useState } from "react";

// // import Layout from "../components/Layout";
// // import RestaurantHeader from "../components/RestaurantHeader";
// // import SearchBar from "../components/SearchBar";
// // import CategoryBar from "../components/CategoryBar";
// // import MenuContainer from "../components/MenuContainer";

// // import menu from "../data/menu.json";

// // function Home() {
// //   const [selectedCategory, setSelectedCategory] = useState(
// //     menu.categories[0]
// //   );

// //   return (
// //     <Layout>
// //       <RestaurantHeader />
// //       <SearchBar />

// //       <CategoryBar
// //         categories={menu.categories}
// //         selectedCategory={selectedCategory}
// //         onSelect={setSelectedCategory}
// //       />

// //       <MenuContainer
// //         category={selectedCategory}
// //       />
// //     </Layout>
// //   );
// // }

// import { useState } from "react";

// import Layout from "../components/Layout";
// import RestaurantHeader from "../components/RestaurantHeader";
// import SearchBar from "../components/SearchBar";
// import CategoryBar from "../components/CategoryBar";
// import MenuContainer from "../components/MenuContainer";
// import StickyMenuHeader from "../components/StickyMenuHeader";
// import menu from "../data/menu.json";
// import { useTable } from "../context/TableContext";

// function Home() {
//   const [selectedCategory, setSelectedCategory] = useState(
//     menu.categories[0]
//   );
//   const { tableNumber, setTableNumber } = useTable();

//   return (
//     <Layout>

//         <RestaurantHeader />

//         <StickyMenuHeader
//             categories={menu.categories}
//             selectedCategory={selectedCategory}
//             onSelect={setSelectedCategory}
//         />

//         <MenuContainer
//             category={selectedCategory}
//         />

//     </Layout>
//   );
// }

// export default Home;

import { useEffect, useState } from "react";

import Layout from "../components/Layout";
import RestaurantHeader from "../components/RestaurantHeader";
import StickyMenuHeader from "../components/StickyMenuHeader";
import MenuContainer from "../components/MenuContainer";

import { useTable } from "../context/TableContext";

import menu from "../data/menu.json";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState(
    menu.categories[0]
  );

  const { tableNumber, setTableNumber } = useTable();
  return (
    <Layout>
      <RestaurantHeader />

      <StickyMenuHeader
        categories={menu.categories}
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <MenuContainer category={selectedCategory} />
    </Layout>
  );
}

export default Home;