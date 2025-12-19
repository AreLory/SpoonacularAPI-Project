import Switch from "./Switch";
import type { ISidebarProps } from "../types/IFilters";
import { Section } from "./Section";
import Input from "./Input";

export default function Sidebar({
  filters,
  onFilterChange,
  onClose,
}: ISidebarProps) {
  const cuisineList = [
    "African",
    "Asian",
    "American",
    "British",
    "Cajun",
    "Caribbean",
    "Chinese",
    "Eastern European",
    "European",
    "French",
    "German",
    "Greek",
    "Indian",
    "Irish",
    "Italian",
    "Japanese",
    "Jewish",
    "Korean",
    "Latin American",
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
    "Nordic",
    "Southern",
    "Spanish",
    "Thai",
    "Vietnamese",
  ];

  return (
    <>
      <div className="fixed inset-0 bg-black/40 z-40" onClick={onClose} />

      <div className="text-mywhite fixed right-0 top-0 h-full w-72 sm:w-80 bg-tiertiary z-50 p-3 sm:p-4 overflow-y-auto">
        <h2 className="text-lg sm:text-xl font-bold mb-4">Filters</h2>

        <Section title="Diets/Intollerances">
          <Switch
            label="Vegan"
            checked={!!filters.vegan}
            onFilterChange={(v) => onFilterChange("vegan", v)}
          />
          <Switch
            label="Gluten free"
            checked={!!filters.glutenFree}
            onFilterChange={(v) => onFilterChange("glutenFree", v)}
          />
          <Switch
            label="Dairy free"
            checked={!!filters.dairyFree}
            onFilterChange={(v) => onFilterChange("dairyFree", v)}
          />
        </Section>

        <Section title="Max time">
          <input
            type="range"
            min={15}
            max={120}
            step={15}
            className="w-full accent-quaternary focus:accent-[#ff6105]"
            value={filters.maxReadyTime ?? 30}
            onChange={(e) =>
              onFilterChange("maxReadyTime", Number(e.target.value))
            }
          />
          <p className="text-md text-quaternary">{filters.maxReadyTime ?? 30} min</p>
        </Section>

        <Section title="Cusine">
          <select
            className="bg-secondary p-2 rounded-xl w-full text-sm text-quaternary"
            value={filters.cuisine ?? ""}
            onChange={(e) => onFilterChange("cuisine", e.target.value)}
          >
            <option value="">Any</option>
            {cuisineList.map((cuisine) => (
              <option key={cuisine} value={cuisine}>
                {cuisine}
              </option>
            ))}
          </select>
        </Section>

        <Section title="Ingredients">
          <Input
            placeholder="Include"
            value={filters.includeIngredients ?? ""}
            onChange={(e) =>
              onFilterChange("includeIngredients", e)
            }
            bgColor="#1f2934"
          />
          <Input
          placeholder="Exclude"
            value={filters.excludeIngredients ?? ""}
            onChange={(e) =>
              onFilterChange("excludeIngredients", e)
            }
            bgColor="#1f2934"
          />
        </Section>

        <button
          className="mt-6 w-full bg-secondary text-white py-2 rounded-xl text-sm font-semibold hover:bg-primary transition"
          onClick={onClose}
        >
          Apply filters
        </button>
      </div>
    </>
  );
}
