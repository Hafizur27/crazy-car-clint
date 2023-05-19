import login from "../assets/logIn.json";
import Lottie from "lottie-react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="hero min-h-screen max-w-6xl mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className="lg:ml-6">
          <Lottie animationData={login} loop={true} className="w-2/3 mx-auto" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h3 className="font-semibold">Please log in</h3>
            <form>
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
                  className="btn btn-warning"
                />
              </div>
            </form>
            <h3 className="font-bold mt-3">Log in with</h3>
            <button className="btn btn-outline btn-primary w-1/4">
              <FaGoogle />{" "}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
