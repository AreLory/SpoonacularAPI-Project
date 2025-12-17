function Switch({
  label,
  checked,
  onFilterChange,
}: {
  label: string;
  checked: boolean;
  onFilterChange: (v: boolean) => void;
}) {
  return (
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onFilterChange(e.target.checked)}
      />
      {label}
    </label>
  );
}


export default Switch