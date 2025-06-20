// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import AlertCard from "../../components/AlertCard";

// export default function ForgotPassword() {
//   const [email, setEmail] = useState("");
//   // const [showNotice, setShowNotice] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setShowNotice(true); // simulate submission
//   };

//   const message = {
//     successReset:
//       "🔒 Your password has been reset successfully. You can now log in with your new credentials.",
//     resetLinkSent:
//       "🔐 A password reset link has been sent to your email. Please check your inbox or spam folder to continue",
//     passwordSentToClient:
//       "🔐 Password has been sent to the clients email provided. Please advise client to check their inbox or spam folder to continue",
//   };

//   return (
//     <div className="absolute bg-white shadow-md rounded-lg   max-w-md  mt-10 flex items-center flex-col text-center p-6 mx-4 py-6">
//       {/* {!showNotice ? ( */}
//       <form
//         onSubmit={handleSubmit}
//         className="max-w-sm w-full space-y-6 text-center"
//       >
//         <img
//           src="/d39926b2b0d4065ffd4b2705393dcc34bd5a59f4.png"
//           className="w-24 mx-auto"
//         />
//         <h2 className="text-xl font-semibold text-[var(--dark)]">
//           Forgot Password
//         </h2>

//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full border rounded px-4 py-2 border-gray-300  focus:outline-none  focus:ring-2  focus:ring-purple-700"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <button className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800">
//           Send Reset Link
//         </button>
//         <Link href="/login" className="text-sm text-purple-600 hover:underline">
//           Back to Login
//         </Link>
//       </form>
//       {/* // ) : ( //{" "}
//       <div className="w-full bg-red-500">
//       // <AlertCard message={message.successReset} />
//       //{" "}
//       </div>
//       // )} */}
//     </div>
//   );
// }
