import { Link } from "react-router-dom";
import nav from "../../../assets/navbar.jpg"


const NavBar = () => {

    const navItems = <>
    <li><Link to="/">Home</Link> </li>
    <li> <Link to="/about">All Toy</Link> </li>
      <>
        <li><Link to="/bookings">My Toy</Link></li>
        <li><button >Add A Toy </button></li>
        <li><img></img></li>
    </> 
     <li> <Link to="/login">Login</Link> </li>
     <li> <Link to="/blog">Blogs</Link> </li>
   
</>
    return (
        <div className="navbar  h-28 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
              <div className="flex items-center">
              <Link to="/" >
                    <img src={nav} alt="" />
                </Link>
                <h1 className="text-3xl font-bold ">Crazy <span className="text-red-500">Car</span></h1>
              </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg font-semibold">
                    {navItems}
                </ul>
            </div>
           
        </div>
    );
};

export default NavBar;