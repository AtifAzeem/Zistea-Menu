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
import SideDrawer from "../components/SideDrawer";
import menu from "../data/menu.json";
import LoadingOverlay from "../components/LoadingOverlay";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState(
    menu.categories[0]
  );
  const [loading, setLoading] = useState(() => {
    return !sessionStorage.getItem("zisteaIntroSeen");
  });
  const { tableNumber, setTableNumber } = useTable();
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (!loading) return;

    const timer = setTimeout(() => {
      sessionStorage.setItem("zisteaIntroSeen", "true");
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <Layout>
      <LoadingOverlay show={loading} />

      <RestaurantHeader
          onMenuClick={() => setDrawerOpen(true)}
      />
      <SideDrawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
      />

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