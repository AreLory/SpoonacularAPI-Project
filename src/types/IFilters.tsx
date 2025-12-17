export interface IFilters {
    glutenFree?: boolean,
    dairyFree?: boolean,
    vegan?: boolean,
    maxReadyTime?: number,
    includeIngredients?:string,
    excludeIngredients?:string,
    cuisine?:string,    
}
export interface INavbarProps {
  query: string
  onInputChange: (query:string)=>void,
  filters: IFilters;
  onFilterChange: <K extends keyof IFilters>(
    key: K,
    value: IFilters[K]
  ) => void;
}

export interface ISidebarProps {
  filters: IFilters;
  onFilterChange: <K extends keyof IFilters>(key: K, value: IFilters[K]) => void;
  onClose: () => void;
}

export interface IRecipesContainerProps {
  query: string;
  filters: IFilters;
}