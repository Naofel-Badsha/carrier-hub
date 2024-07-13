import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.init";
import PropTypes from 'prop-types';


export const AuthContext = createContext(null);
//-----singin---width---google-------
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  //------Create---New------User-------
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //------SingIn------User-------
  const singInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //------SingIn------Width----Google-------
  const singInWidthGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //------Logout-----user------
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //-----Observe-----User------
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(
        "observing current user onside useEffect of AuthProvider",
        currentUser
      );
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    singInUser,
    singInWidthGoogle,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
   </AuthContext.Provider>
  );
};
AuthProvider.propTypes ={
   children: PropTypes.node
 }
export default AuthProvider;
