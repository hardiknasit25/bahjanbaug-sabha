import { cn } from "~/lib/utils";

function SubmitButton({
  buttonText,
  loadingButtonText,
  loading,
  className,
}: {
  buttonText: string;
  loadingButtonText: string;
  loading: boolean;
  className?: string;
}) {
  return (
    <button
      type="submit"
      className={cn(
        "w-full rounded-full bg-primaryColor text-white font-medium py-2 px-4 transition-colors duration-200",
        className
      )}
    >
      {loading ? loadingButtonText : buttonText}
    </button>
  );
}

export default SubmitButton;
