type StatusMessageProps = {
  message?: string;
  error?: string;
};

export default function StatusMessage({
  message,
  error,
}: StatusMessageProps) {
  return (
    <>
      {message && (
        <div className="mt-6 rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-700">
          {message}
        </div>
      )}

      {error && (
        <div className="mt-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {error}
        </div>
      )}
    </>
  );
}