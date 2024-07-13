import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <img
          src="https://i.ibb.co/rZKjhPz/loding-3.gif"
          className="w-[150px]"
        />
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
