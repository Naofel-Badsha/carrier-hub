import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from "../../Firebase/firebase.init";
import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState({})
    const auth =  getAuth(app)
    const googleProvider = new GoogleAuthProvider();

    const handleSinginGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser)
            setUser(loggedInUser)
        })
        .catch(error => {
            console.log(error)
        })
    }

    const handleSingOut = () => {
        signOut(auth)
        .then(result => {
            console.log(result)
            setUser(null)
        })
        .catch(error => {
            console.log(error)
        })

    }
     
    return (
        <div className="flex items-center justify-center py-10">

            {
            user ? 
            <button onClick={handleSingOut} 
            className="bg-slate-950 text-white font-bold
            py-2 px-4 rounded-md">Logout</button> 
            :
            <button onClick={handleSinginGoogle} 
            className="bg-slate-950 text-white font-bold
            py-2 px-4 rounded-md">Google Singin</button>

            }

            {
              user &&  <div>
                <h2>{user.displayName}</h2>
                <h2>{user.email}</h2>
              </div> 
            }
        </div>
    );
};

export default Login;