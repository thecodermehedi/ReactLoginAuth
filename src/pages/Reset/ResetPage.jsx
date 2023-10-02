import {sendPasswordResetEmail} from "firebase/auth";
import {useRef, useState} from "react";
import auth from "../../firebase/firebase.config";

const ResetPage = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const emailRef = useRef(null);
  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    setSuccess("");
    setError("");
    if (!email) {
      setError("Please enter your email");
      return;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setError("Please enter a valid email");
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("Email sent");
        setSuccess("Email sent");
        emailRef.current.value = "";
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  return (
    <div className="h-screen bg-gray-900 text-slate-300 flex flex-col justify-center items-center gap-4 px-40">
      <h1 className="text-4xl font-bold text-blue-500">Reset Your Password</h1>
      <input
        ref={emailRef}
        type="email"
        name="email"
        id="email"
        placeholder="Enter Your Email Address"
        className="input bg-blue-500 bg-opacity-10 rounded-2xl border-none focus:outline-none mb-2 text-lg w-[50rem]"
        required
      />
      {success ? (
        <p className="text-sm text-center text-green-600 visible">{success}</p>
      ) : (
        <p className="text-sm text-center text-green-600 invisible">
          {success}
        </p>
      )}
      {error ? (
        <p className="text-sm text-center text-red-600 visible">{error}</p>
      ) : (
        <p className="text-sm text-center text-red-600 invisible">{error}</p>
      )}
      <button
        onClick={handleForgetPassword}
        type="submit"
        className="btn bg-blue-500 hover:bg-blue-600 rounded-2xl border-none transition-all duration-300 cursor-pointer text-white capitalize text-xl w-56"
      >
        Submit
      </button>
    </div>
  );
};

export default ResetPage;
