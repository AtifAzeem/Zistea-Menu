import { normalize } from "./buildSearchIndex";

export function searchMenu(index, query) {
  query = normalize(query);

  if (!query) return [];

  const results = [];

  for (const entry of index) {
    const item = entry.item;

    let score = 0;

    const name = normalize(item.name);
    const category = normalize(entry.category);
    const description = normalize(item.description ?? "");
    const searchable = entry.searchable;

    let matched = false;

    if (name === query) {
        score += 100;
        matched = true;
    }

    if (name.startsWith(query)) {
        score += 80;
        matched = true;
    }

    if (name.includes(query)) {
        score += 60;
        matched = true;
    }

    if (category.includes(query)) {
        score += 50;
        matched = true;
    }

    if (description.includes(query)) {
        score += 20;
        matched = true;
    }

    if (searchable.includes(query)) {
        score += 10;
        matched = true;
    }

    if (matched) {
        if (item.popular) score += 5;
        if (item.recommended) score += 3;

        results.push({
            item,
            category: entry.category,
            score,
        });
    }
  }

  results.sort((a, b) => b.score - a.score);

  return results;
}