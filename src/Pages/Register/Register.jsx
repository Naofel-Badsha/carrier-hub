import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  //--------------
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handelRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log(name, email, password, accepted);
    //-------Reset----error------
    setRegisterError("");
    setSuccess("");

    if (password.length < 6) {
      setRegisterError(" Password should be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Your password should have at least one Uppercase Charracters"
      );
      return;
    } else if (!accepted) {
      setRegisterError("Please accepted Terms and Conditions!");
      return;
    }

    //-----Create----new---user-----
    createUser(email, password)
      .then((result) => {
        console.log(result);
        setSuccess("User creatrd Succcessfully");
        setRegisterError("");
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
                {/*-----------------*/}
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered w-full"
                  />
                  <small
                    className="absolute cursor-pointer -ml-12 mt-3 text-xl"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "show" : "hide"}
                  </small>
                </div>
                  {/*-------------*/}

                <div className="flex gap-3 mt-6">
                  <input
                    type="checkbox"
                    name="terms"
                    id="terms"
                    className="cursor-pointer w-[20px]"
                  />
                  <label className="label">
                    <span className="label-text">
                      Accept our Terms and Conditions
                    </span>
                  </label>
                </div>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Registation</button>
              </div>
              <Link to="/login">
                <p>
                  Allready have an account Plese{" "}
                  <small className="text-orange-600 text-xl underline">
                    Login
                  </small>
                </p>
              </Link>
            </form>

            {registerError && <p>{registerError}</p>}
            {success && <p>{success}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
