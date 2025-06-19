export default function ResetStatus() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-white">
      <div className="bg-white border border-gray-200 p-6 text-center max-w-md rounded-lg shadow">
        <div className="text-4xl mb-2">✅</div>
        <p className="text-xl font-semibold text-[var(--dark)]">
          A password reset link has been sent to your email. Please check your
          inbox or spam folder to continue.
        </p>
      </div>
    </div>
  );
}
