function SubmitButton({
  buttonText,
  loadingButtonText,
  loading,
}: {
  buttonText: string;
  loadingButtonText: string;
  loading: boolean;
}) {
  return (
    <button
      type="submit"
      className="w-full rounded-full bg-submitButtonColor text-white font-medium py-2 px-4 transition-colors duration-200"
    >
      {loading ? loadingButtonText : buttonText}
    </button>
  );
}

export default SubmitButton;
