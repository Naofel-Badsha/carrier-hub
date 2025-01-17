import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handelLogOut = () => {
    console.log("logout user");
    logOut()
      .then((result) => {
        console.log("Logged user SeccessFully", result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navLink = (
    <>
      <li><NavLink className="text-xl" to="/">Home</NavLink></li>
      <li><NavLink className="text-xl" to="/statistics">Statistics</NavLink></li>
      <li><NavLink className="text-xl" to="/appliedJobs">Applied Jobs</NavLink></li>
      {
        user && <>
        <li><NavLink className="text-xl" to="/blog">Blog</NavLink></li>
        </>
      }
      <li><NavLink className="text-xl" to="/login">Login</NavLink></li>  
    </>
  );
  return (
    <div className="navbar bg-white sticky inset-0 z-10  w-full max-w-full rounded-none border  bg-opacity-30 py-2 px-4 text-black shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-2 lg:py-2">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm gap-4 dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">CareerHub</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">{navLink}</ul>
        </div>
        <div>
          {user ? 
          <>
           <span>{user.email}</span>
            <div className="flex items-center gap-3">
              <button onClick={handelLogOut} className="btn">
                Sing Out
              </button>
            </div>
          </>
           : 
           <Link to={"/login"}>
           <button className="btn">Login</button>
         </Link>
          
          }

         <div className="navbar-end">
                <Link to={"/"}>
                  <button className="btn">Star Applying</button>
                </Link>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
