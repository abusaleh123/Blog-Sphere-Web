import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.init";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
  

    const registerWithEmailPass = (email ,password) => {
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password);
    
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
        setLoading(false)
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
            profileUpdate
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;