import { Spinner } from "../ui/spinner";

function LoadingSpinner() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Spinner className="size-10 text-primaryColor" />
    </div>
  );
}

export default LoadingSpinner;
