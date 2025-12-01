import { Controller, type Control } from "react-hook-form";

interface DatePickerControllerProps {
  name: string;
  control: Control<any>;
  label?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
}

function DatePickerController({
  name,
  control,
  label,
  placeholder = "Pick a date",
  className,
  disabled = false,
  required = false,
}: DatePickerControllerProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className={`flex flex-col space-y-2 ${className || ""}`}>
          {label && (
            <label className="text-sm font-medium text-gray-700">
              {label}
              {required && <span className="text-red-500 ml-1">*</span>}
            </label>
          )}
          <input
            type="date"
            {...field}
            disabled={disabled}
            placeholder={placeholder}
            className={`w-full h-10 px-3 py-2 border rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              error ? "border-red-500" : "border-gray-300"
            }`}
            min={new Date().toISOString().split("T")[0]} // Disable past dates
          />
          {error && <p className="text-sm text-red-500">{error.message}</p>}
        </div>
      )}
    />
  );
}

export default DatePickerController;
