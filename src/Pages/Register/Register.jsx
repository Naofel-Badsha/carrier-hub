import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {
    const {createUser} = useContext(AuthContext)


    const handelRegister = e => {
       e.preventDefault()
       const name = e.target.name.value;
       const email = e.target.email.value;
       const password = e.target.password.value;
       console.log(name, email, password)
       
       //-----Create----new---user-----
       createUser(email, password)
       .then(result => {
        console.log(result)
       })
       .catch(error => {
        console.log(error.message) 
       })
    }
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Registation now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handelRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
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
                <div className="flex gap-3 mt-5">
                <input type="checkbox" className="w-[50px]"/>
                <p>Plese Check Out Me</p>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Registation</button>
              </div>
              <Link to="/login">
              <p>Allready have an account Plese <small className="text-orange-600 text-xl underline">Login</small></p>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
