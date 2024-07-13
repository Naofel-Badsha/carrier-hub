import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { singInUser, singInWidthGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const handelLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    //-------singIn----User------
    singInUser(email, password)
      .then((result) => {
        console.log(result.user);
        //-----Login------or-----Input--Fild----Reset----
        e.target.reset();
        //-----User----Login fater Default home page-----
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  //--------Google-----SinIn------
  const handelGoogleSingIn = () => {
    singInWidthGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handelLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a className="label-text underline">Fprget Password</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>

              <div className="form-control mt-6 w-28 m-auto">
                <button
                  onClick={handelGoogleSingIn}
                  className="btn btn-primary"
                >
                  Google
                </button>
              </div>
              <Link to="/registation">
                <p>
                  Created a new account? Plese{" "}
                  <small className="text-orange-600 text-xl underline">
                    Register
                  </small>
                </p>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

// {
//     user ?
//     <button onClick={handleSingOut}
//     className="bg-slate-950 text-white font-bold
//     py-2 px-4 rounded-md">Logout</button>
//     :
//     <button onClick={handleSinginGoogle}
//     className="bg-slate-950 text-white font-bold
//     py-2 px-4 rounded-md">Google Singin</button>

//     }

//     {
//       user &&  <div>
//         <h2>{user.displayName}</h2>
//         <h2>{user.email}</h2>
//       </div>
//     }
