import {Link} from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import auth from "./../../firebase/firebase.config";
import {useState} from "react";
import {FaEye, FaEyeSlash} from "react-icons/fa6";
const Signup = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    console.log("submitted");
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    const termsandcon = e.target.termsandcon.checked;
    setSuccess("");
    setError("");
    setShowPassword(false);
    setShowConfirmPassword(false);
    if (password.length < 6) {
      setError("Password should be at least 6 characters or more");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setError("Password should contain at least one capital letter");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!termsandcon) {
      setError("You must accept terms and conditions");
      return;
    }
    console.log(email, password, confirmPassword, termsandcon);
    e.target.email.value = "";
    e.target.password.value = "";
    e.target.confirmPassword.value = "";
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        sendEmailVerification(result.user)
          .then(() => {
            setSuccess("Please verify your email");
            console.log(result.user);
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  return (
    <section className="h-screen bg-gray-900 text-slate-300">
      <div className="container h-full px-6 py-24">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          {/* <!-- Left column container with background--> */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img src="./164.svg" className="w-full" alt="login-image" />
          </div>

          {/* <!-- Right column container with form --> */}
          <div className="md:w-8/12 lg:ml-6 lg:w-5/12 pb-10">
            <h1 className="text-center text-4xl font-bold text-blue-500 mb-6">
              Create Your Account
            </h1>
            <form onSubmit={handleRegister} className="flex flex-col gap-2">
              {/* <!-- Email input --> */}
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="input bg-blue-500 bg-opacity-10 rounded-2xl border-none focus:outline-none mb-2 text-lg"
                required
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
              {/* <!-- Confirm Password input --> */}
              <div className="flex relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  className="input bg-blue-500 bg-opacity-10 rounded-2xl border-none focus:outline-none mb-2 text-lg w-full pr-10"
                  required
                />
                {showConfirmPassword ? (
                  <FaEyeSlash
                    className="absolute right-4 top-4 cursor-pointer text-lg"
                    onClick={() => setShowConfirmPassword(false)}
                  />
                ) : (
                  <FaEye
                    className="absolute right-4 top-4 cursor-pointer text-lg"
                    onClick={() => setShowConfirmPassword(true)}
                  />
                )}
              </div>
              {/* Terms & Conditions */}
              <div className="ml-3">
                <input
                  type="checkbox"
                  name="termsandcon"
                  id="termsandcon"
                  className="mr-2"
                />
                <label htmlFor="termsandcon">
                  I have read and agree to the Terms and Conditions.
                </label>
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
              <button
                type="submit"
                className="btn bg-blue-500 hover:bg-blue-600 transition-all duration-300 cursor-pointer text-white rounded-2xl border-none focus:outline-none text-xl"
              >
                Sign Up
              </button>
              <p className="text-center">
                Already have an account?{" "}
                <span className="text-blue-500">
                  <Link to="/login">Sign in</Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
