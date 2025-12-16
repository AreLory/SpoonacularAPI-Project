export interface IRecipe {
  id: number;
  title: string;
  image: string;
  servings: number;
  readyInMinutes: number;
  preparationMinutes: number;
  cookingMinutes: number;
  analyzedInstructions: IInstruction[];
  extendedIngredients: IIngredient[];
  summary: string;
}

// ** Interfacce per ingredienti
export interface IIngredient {
  id: number;
  image: string;
  name: string;
  measures: IMeasures
}

interface IAmount {
  amount: number;
  unitShort: string;
}

interface IMeasures {
  metric: IAmount;
  us: IAmount;
}

// ** Interfacce per istruzioni
export interface IInstruction {
    name: string
    steps: IStep[]
}

export interface IStep {
    number: number,
    step:string
}