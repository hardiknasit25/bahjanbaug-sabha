import {
  Controller,
  type Control,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectControllerProps<T extends FieldValues> {
  name: FieldPath<T>;
  control: Control<T>;
  label?: string;
  placeholder?: string;
  options: SelectOption[];
  className?: string;
  disabled?: boolean;
}

function SelectController<T extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  options,
  className,
  disabled = false,
}: SelectControllerProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="space-y-2">
          {label && (
            <label
              htmlFor={name}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {label}
            </label>
          )}
          <select
            {...field}
            id={name}
            disabled={disabled}
            className={`flex h-10 w-full rounded-md border bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50 ${
              error ? "border-red-500 focus:ring-red-500" : "border-gray-300"
            } ${className || ""}`}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {error && <p className="text-sm text-red-500">{error.message}</p>}
        </div>
      )}
    />
  );
}

export default SelectController;
