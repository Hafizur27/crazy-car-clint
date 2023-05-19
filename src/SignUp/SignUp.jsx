import login from "../assets/logIn.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div className="hero min-h-screen max-w-6xl mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="lg:ml-6">
          <Lottie animationData={login} loop={true} className='w-2/3 mx-auto'/>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h3 className="font-semibold">Please Register now</h3>
             <form>
             <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="enter your name" name="name" className="input input-bordered" />
              </div>
             <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="enter your email" name="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="enter your password" name="password" className="input input-bordered" />
               
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input type="photo" placeholder="enter your photo" name="photo" className="input input-bordered" />
              </div>
              <div className="form-control mt-6">
                <input type="submit" value="Sign-Up" className="btn bg-red-700" />
              </div>
             </form>
             
            
            <small className='text-sm mt-2'>
            If you have an account ? please
                <Link to="/LogIn" className="underline decoration-cyan-500 text-cyan-500 ml-1 font-medium">
               Log-In
                </Link>
              </small>
            
             
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;