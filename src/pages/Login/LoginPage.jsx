import {signInWithEmailAndPassword} from "firebase/auth";

import {useState} from "react";
import {
  FaGithub,
  FaGoogle,
  FaFacebook,
  FaXTwitter,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa6";
import {Link} from "react-router-dom";
import auth from "./../../firebase/firebase.config";
const Login = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleSignIn = (e) => {
    e.preventDefault();
    console.log("submitted");
    const email = e.target.email.value;
    const password = e.target.password.value;
    setSuccess("");
    setError("");
    setShowPassword(false);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        if (!user.emailVerified) {
          e.target.email.value = "";
          e.target.password.value = "";
          setError("Please verify your email");
          return;
        }
        setSuccess("Logged in successfully");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setError(errorMessage);
      });
    console.log(email, password);
  };
  return (
    <section className="h-screen bg-gray-900 text-slate-300">
      <div className="container h-full px-6 py-24">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          {/* <!-- Left column container with background--> */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="./268.svg"
              className="w-full scale-x-[-1]"
              alt="login-image"
            />
          </div>

          {/* <!-- Right column container with form --> */}
          <div className="md:w-8/12 lg:ml-6 lg:w-5/12 pb-10">
            <h1 className="text-center text-4xl font-bold text-blue-500 mb-6">
              Welcome back!
            </h1>
            <form onSubmit={handleSignIn} className="flex flex-col gap-2">
              {/* <!-- Email input --> */}
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="input bg-blue-500 bg-opacity-10 rounded-2xl border-none focus:outline-none mb-2 text-lg"
              />
              {/* <!-- Password input --> */}
              <div className="flex relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="input bg-blue-500 bg-opacity-10 rounded-2xl border-none focus:outline-none mb-2 text-lg w-full pr-10"
                  required
                />
                {showPassword ? (
                  <FaEyeSlash
                    className="absolute right-4 top-4 cursor-pointer text-lg"
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <FaEye
                    className="absolute right-4 top-4 cursor-pointer text-lg"
                    onClick={() => setShowPassword(true)}
                  />
                )}
              </div>
              {success ? (
                <p className="text-sm text-center text-green-600 visible">
                  {success}
                </p>
              ) : (
                <p className="text-sm text-center text-green-600 invisible">
                  {success}
                </p>
              )}
              {error ? (
                <p className="text-sm text-center text-red-600 visible">
                  {error}
                </p>
              ) : (
                <p className="text-sm text-center text-red-600 invisible">
                  {error}
                </p>
              )}
              <p className="text-center text-blue-500 hover:underline">
                <Link to="/resetpassword">Forgot password?</Link>
              </p>
              <button
                type="submit"
                className="btn bg-blue-500 hover:bg-blue-600 rounded-2xl border-none transition-all duration-300 cursor-pointer text-white capitalize text-xl"
              >
                Sign in
              </button>
              <p className="text-center">
                Don&apos;t have an account?{" "}
                <span className="text-blue-500 hover:underline">
                  <Link to="/signup">Sign up</Link>
                </span>{" "}
              </p>
            </form>
            <div className="divider">Or login with</div>
            <div className="flex justify-center items-center gap-4">
              <button className="text-4xl hover:text-blue-600">
                <FaFacebook className={"w-8 h-8"} />
              </button>
              <button className="text-4xl hover:text-blue-600">
                <FaGoogle className={"w-8 h-8"} />
              </button>
              <button className="text-4xl hover:text-blue-600">
                <FaGithub className={"w-8 h-8"} />
              </button>
              <button className="text-4xl hover:text-blue-600">
                <FaXTwitter className={"w-8 h-8"} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
