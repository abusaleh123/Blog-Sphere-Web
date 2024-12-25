import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.init";
import axios from "axios";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();
 

   const signInWithGoogle = (auth, provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider)
   }

    const registerWithEmailPass = (email ,password) => {
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password);
    
    }

    const signOutUser =() => {
        setLoading(true);
        return signOut(auth)
    }
const signInWithEmailPass = (email ,password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
}



const profileUpdate = (profileUpdate) => {
        setLoading(true)
        return updateProfile(auth.currentUser, profileUpdate)
}


useEffect( () => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
        if(currentUser?.email){
            const user = {email: currentUser.email};

            axios.post('https://new-blog-assignment-11-server.vercel.app/jwt', user, {
                withCredentials: true
            })
            .then(res => {
                // console.log('login',res.data);
                setLoading(false)
            })
        }
        else{
            axios.post('https://new-blog-assignment-11-server.vercel.app/logout', {}, {
                withCredentials: true
            })
            .then(res => {
                // console.log('logout',res.data);
                setLoading(false)
            })
        }
       
    })
    return () => {
        unsubscribe()
    }
}, [])

    const authInfo = {
            user,
            setUser,
            registerWithEmailPass,
            signInWithEmailPass,
            profileUpdate,
            signOutUser,
            signInWithGoogle,
            provider,
            setLoading,
            loading
         

           
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;