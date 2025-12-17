import Switch from "./Switch";
import type { ISidebarProps } from "../types/IFilters";
import { Section } from "./Section";

export default function Sidebar({ filters, onFilterChange, onClose }: ISidebarProps) {
  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside className="fixed right-0 top-0 h-full w-80 bg-white z-50 p-4 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Filtri</h2>

        {/* SWITCH */}
        <Section title="Dieta">
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

        {/* SLIDER */}
        <Section title="Tempo massimo">
          <input
            type="range"
            min={15}
            max={60}
            step={15}
            value={filters.maxReadyTime ?? 30}
            onChange={(e) =>
              onFilterChange("maxReadyTime", Number(e.target.value))
            }
          />
          <p>{filters.maxReadyTime ?? 30} min</p>
        </Section>

        {/* SELECT */}
        <Section title="Cucina">
          <select
            value={filters.cuisine ?? ""}
            onChange={(e) => onFilterChange("cuisine", e.target.value)}
          >
            <option value="">Qualsiasi</option>
            <option value="italian">Italiana</option>
            <option value="mexican">Messicana</option>
            <option value="asian">Asiatica</option>
            <option value="indian">Indiana</option>
          </select>
        </Section>

        {/* INPUT TEXT */}
        <Section title="Ingredienti">
          <input
            type="text"
            placeholder="Includi (es. tomato,onion)"
            value={filters.includeIngredients ?? ""}
            onChange={(e) =>
              onFilterChange("includeIngredients", e.target.value)
            }
          />
          <input
            type="text"
            placeholder="Escludi (es. egg)"
            value={filters.excludeIngredients ?? ""}
            onChange={(e) =>
              onFilterChange("excludeIngredients", e.target.value)
            }
          />
        </Section>

        <button
          className="mt-6 w-full bg-primary text-white py-2 rounded"
          onClick={onClose}
        >
          Applica filtri
        </button>
      </aside>
    </>
  );
}
