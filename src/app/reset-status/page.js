import AlertCard from "../../components/AlertCard";

export default function ResetStatus() {
  const message = {
    successReset:
      "🔒 Your password has been reset successfully. You can now log in with your new credentials.",
    resetLinkSent:
      "🔐 A password reset link has been sent to your email. Please check your inbox or spam folder to continue",
    passwordSentToClient:
      "🔐 Password has been sent to the clients email provided. Please advise client to check their inbox or spam folder to continue",
  };
  return (
    <>
      <AlertCard message={message.successReset} />
    </>
  );
}
