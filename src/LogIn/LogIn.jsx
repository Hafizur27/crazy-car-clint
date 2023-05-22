import login from "../assets/logIn.json";
import Lottie from "lottie-react";
import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";


const LogIn = () => {
  // eslint-disable-next-line no-unused-vars
  const { signIn, googleSignIn, user } = useContext(AuthContext);
  const [error, setError] = useState("");
 

  const handelLogIn = (event) => {
    event.preventDefault();
   
      setError("");
  
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        if (loggedUser.uid) {
          Swal.fire({
            title: "Successfully log-in !",
            icon: "success",
            confirmButtonText: "ok",
          });
        }
        setError("");
        event.target.reset();
        window.location.href = "/";
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handelGoogleLogIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        if (user.uid) {
          Swal.fire({
            title: "Successfully log-in !",
            icon: "success",
            confirmButtonText: "ok",
          });
        }
        setError("");
        window.location.href = "/";
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="hero min-h-screen max-w-6xl mx-auto">
      <Helmet>
        <title>Log In</title>
      </Helmet>

      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className="lg:ml-6">
          <Lottie animationData={login} loop={true} className="w-2/3 mx-auto" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h3 className="font-semibold">Please log in</h3>
            <form onSubmit={handelLogIn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="enter your email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="enter your password"
                  name="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Log-In"
                  className="btn bg-red-700"
                />
              </div>
            </form>
            <h3 className="font-bold mt-3">Log in with</h3>
            <button
              onClick={handelGoogleLogIn}
              className="btn btn-outline btn-primary w-1/4 "
            >
              <FaGoogle />
            </button>
            <div>
              <small className="text-sm">
                If you did not have an account ? please
                <Link
                  to="/register"
                  className="underline decoration-cyan-500 text-cyan-500 ml-1 font-medium"
                >
                  Register
                </Link>
              </small>
            </div>
            <p className="text-red-500 mt-2">{error}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
