import { createContext, useContext, useEffect, useState } from "react";
import { getMenu } from "../services/menuService";

const MenuContext = createContext();

export function MenuProvider({ children }) {
  const [menu, setMenu] = useState(null);
  const [loading, setLoading] = useState(() => {
        return !localStorage.getItem("zisteaMenu");
    });
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  async function fetchLatestMenu() {
    try {
      setRefreshing(true);

      const freshMenu = await getMenu();

      setMenu(freshMenu);

      localStorage.setItem(
        "zisteaMenu",
        JSON.stringify(freshMenu)
      );

      setError(null);
    } catch (err) {
      console.error(err);
      setError(err);
    } finally {
      setRefreshing(false);
    }
  }

  useEffect(() => {
    async function initialize() {
      const cachedMenu = localStorage.getItem("zisteaMenu");
      const introSeen = sessionStorage.getItem("zisteaIntroSeen");

      // -----------------------------
      // Cached menu exists
      // -----------------------------
      if (cachedMenu) {
        try {
            setMenu(JSON.parse(cachedMenu));
            setLoading(false);
            fetchLatestMenu();
            return;
        } catch {
            localStorage.removeItem("zisteaMenu");
        }
    }

      // -----------------------------
      // First launch
      // -----------------------------
      try {
        const freshMenu = await getMenu();

        setMenu(freshMenu);

        localStorage.setItem(
          "zisteaMenu",
          JSON.stringify(freshMenu)
        );

        setError(null);

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