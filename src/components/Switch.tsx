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
    <label className="flex items-center cursor-pointer gap-2">
      <input
        className="sr-only peer"
        type="checkbox"
        checked={checked}
        onChange={(e) => onFilterChange(e.target.checked)}
      />
      <div className="relative w-9 h-5 bg-neutral-quaternary rounded-full peer dark:bg-quaternary peer-focus:ring-4 peer-focus:ring-primary dark:peer-focus:ringternary peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-mywhite after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-mywhite after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#ff6105] dark:peer-checked:bg-[#ff6105]"></div>
      <span className="select-none ms-3 text-sm font-medium text-heading text-quaternary">
        {label}
      </span>
    </label>
  );
}

export default Switch;
