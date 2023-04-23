import PropTypes from "prop-types"
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect, signOut } from "firebase/auth";

// Context
const AuthContext = createContext();

// Context Provider
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true) // This is to control the screen from going back to login before navigating to the main chat screen on refresh

    // Sign In With Google
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    }

    // Set the current user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, [])

    // Sign Out Current User
    const signOutCurrentUser = async () => {
        await signOut(auth);
        setCurrentUser(null)
    }

    const value = {
        currentUser,
        setCurrentUser,
        signInWithGoogle,
        signOutCurrentUser,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
    
}
AuthProvider.propTypes = {
  children: PropTypes.any
}

export const UserAuth = () => {
    return useContext(AuthContext);
}