import { categoryKeywords } from "./searchKeywords";

export function normalize(text = "") {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, " ");
}
export function buildSearchIndex(menu) {
  if (!menu?.categories) {
    return [];
  }

  const index = [];

  for (const category of menu.categories) {
    const keywords = categoryKeywords[category.name] || [];

    for (const item of category.items) {
      index.push({
        id: item.id,
        item,
        category: category.name,
        searchable: normalize(
          [
            item.name,
            category.name,
            item.description,
            ...keywords,
          ].join(" ")
        ),
      });
    }
  }

  return index;
}