import { Info } from "lucide-react";

function ErrorMessage({ error }: { error: string }) {
  return (
    <div className="flex justify-start items-center gap-1">
      <Info size={14} className="text-errorColor" />
      <p className="text-sm text-errorColor">{error}</p>
    </div>
  );
}

export default ErrorMessage;
