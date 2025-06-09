export default function FilterPanel({ onFilterChange }: { onFilterChange: (val: string) => void }) {
  return (
    <div className="flex gap-2 items-center">
      <label htmlFor="filter" className="text-sm font-medium">
        🔍 Filtro Ordini:
      </label>
      <input
        id="filter"
        onChange={(e) => onFilterChange(e.target.value)}
        className="px-2 py-1 rounded-md bg-muted text-sm"
        placeholder="Es. 100, 2.5..."
      />
    </div>
  );
}
