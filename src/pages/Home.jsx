import { useEffect, useState } from "react";

import Layout from "../components/Layout";
import RestaurantHeader from "../components/RestaurantHeader";
import StickyMenuHeader from "../components/StickyMenuHeader";
import MenuContainer from "../components/MenuContainer";
import SideDrawer from "../components/SideDrawer";
import LoadingOverlay from "../components/LoadingOverlay";

import { useMenu } from "../context/MenuContext";
import useMenuSearch from "../hooks/useMenuSearch";

function Home() {
  const { menu, loading, error } = useMenu();

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [search, setSearch] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { searching, results } = useMenuSearch(menu, search);

  useEffect(() => {
    if (
      menu &&
      menu.categories.length > 0 &&
      !selectedCategory
    ) {
      setSelectedCategory(menu.categories[0]);
    }
  }, [menu, selectedCategory]);

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center">
        Failed to load menu.
      </div>
    );
  }

  return (
    <Layout>
      <LoadingOverlay show={loading} />

      {!loading && menu && selectedCategory && (
        <>
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
            search={search}
            setSearch={setSearch}
          />

          <MenuContainer
            category={selectedCategory}
            searching={searching}
            searchResults={results}
          />
        </>
      )}
    </Layout>
  );
}

export default Home;