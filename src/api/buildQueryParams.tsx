import type { IFilters } from "../types/IFilters";

export function buildQueryParams(
  query: string,
  filters: IFilters
): string {
  const params = new URLSearchParams();

  if (query.trim()) {
    params.append("query", query);
  }

  if (filters.vegan) {
    params.append("diet", "vegan");
  }

  const intolerances: string[] = [];
  if (filters.glutenFree) intolerances.push("gluten");
  if (filters.dairyFree) intolerances.push("dairy");

  if (intolerances.length) {
    params.append("intolerances", intolerances.join(","));
  }

  if (filters.maxReadyTime) {
    params.append("maxReadyTime", filters.maxReadyTime.toString());
  }

  if (filters.includeIngredients) {
    params.append("includeIngredients", filters.includeIngredients);
  }

  if (filters.excludeIngredients) {
    params.append("excludeIngredients", filters.excludeIngredients);
  }

  if (filters.cuisine) {
    params.append("cuisine", filters.cuisine);
  }

  return params.toString();
}
