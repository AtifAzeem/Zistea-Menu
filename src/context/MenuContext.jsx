import { createContext, useContext, useEffect, useState } from "react";
import { getMenu } from "../services/menuService";

const MenuContext = createContext();

const MENU_CACHE_KEY = "zisteaMenu";
const MENU_CACHE_EXPIRY_MS = 6 * 60 * 60 * 1000; // 6 hours

export function MenuProvider({ children }) {
  const [menu, setMenu] = useState(null);

  const [loading, setLoading] = useState(() => {
    return !localStorage.getItem(MENU_CACHE_KEY);
  });

  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  // --------------------------------------------------
  // Fetch fresh menu
  // --------------------------------------------------

  async function fetchLatestMenu() {
    try {
      setRefreshing(true);

      const freshMenu = await getMenu();

      setMenu(freshMenu);

      localStorage.setItem(
        MENU_CACHE_KEY,
        JSON.stringify({
          menu: freshMenu,
          cachedAt: Date.now(),
        })
      );

      setError(null);

      return freshMenu;
    } catch (err) {
      console.error(err);
      setError(err);
      throw err;
    } finally {
      setRefreshing(false);
    }
  }

  // --------------------------------------------------
  // Initialize menu
  // --------------------------------------------------

  useEffect(() => {
    async function initialize() {
      const cachedMenu = localStorage.getItem(MENU_CACHE_KEY);
      const introSeen = sessionStorage.getItem("zisteaIntroSeen");

      // ---------------------------------------------
      // Cached menu exists
      // ---------------------------------------------

      if (cachedMenu) {
        try {
          const parsed = JSON.parse(cachedMenu);

          const cachedMenuData = parsed.menu;
          const cachedAt = parsed.cachedAt;

          // Old cache format / corrupted cache
          if (!cachedMenuData || !cachedAt) {
            throw new Error("Invalid menu cache");
          }

          const isExpired =
            Date.now() - cachedAt > MENU_CACHE_EXPIRY_MS;

          // -----------------------------------------
          // Cache is still fresh
          // -----------------------------------------

          if (!isExpired) {
            setMenu(cachedMenuData);
            setLoading(false);
            return;
          }

          // -----------------------------------------
          // Cache expired
          // -----------------------------------------

          // Remove old menu
          localStorage.removeItem(MENU_CACHE_KEY);

          // Keep loading = true
          // This makes the loading/intro page appear
        } catch (err) {
          console.warn(
            "Invalid or corrupted menu cache:",
            err
          );

          localStorage.removeItem(MENU_CACHE_KEY);
        }
      }

      // ---------------------------------------------
      // No cache / expired cache
      // ---------------------------------------------

      try {
        const freshMenu = await getMenu();

        setMenu(freshMenu);

        localStorage.setItem(
          MENU_CACHE_KEY,
          JSON.stringify({
            menu: freshMenu,
            cachedAt: Date.now(),
          })
        );

        setError(null);

        // Show intro only once per browser session
        if (!introSeen) {
          await new Promise((resolve) =>
            setTimeout(resolve, 1600)
          );

          sessionStorage.setItem(
            "zisteaIntroSeen",
            "true"
          );
        }
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    initialize();
  }, []);

  // --------------------------------------------------
  // Manual refresh
  // --------------------------------------------------

  const refreshMenu = async () => {
    await fetchLatestMenu();
  };

  return (
    <MenuContext.Provider
      value={{
        menu,
        loading,
        refreshing,
        error,
        refreshMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  return useContext(MenuContext);
}