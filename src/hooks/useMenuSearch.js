import { useEffect, useMemo, useState } from "react";

import { buildSearchIndex } from "../utils/buildSearchIndex";
import { searchMenu } from "../utils/searchEngine";

export default function useMenuSearch(menu, query) {
  // Build the index only once (or if menu changes)
  const searchIndex = useMemo(() => {
    return buildSearchIndex(menu);
  }, [menu]);

  // Debounced query
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 180);

    return () => clearTimeout(timer);
  }, [query]);

  // Search results
  const results = useMemo(() => {
    if (!debouncedQuery.trim()) return [];

    return searchMenu(searchIndex, debouncedQuery);
  }, [searchIndex, debouncedQuery]);

  return {
    searching: debouncedQuery.trim().length > 0,
    results,
  };
}