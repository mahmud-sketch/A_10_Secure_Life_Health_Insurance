import { useState, useEffect } from 'react'
import initializeAuthentication from '../Firebase/firebase.initialize';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

initializeAuthentication();
function useFirebase() {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                console.log(result.user);
            }).catch((err => {
                setError(err.message);
            }))
    }


    const logout = () => {
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            // An error happened.
        });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user);
                setUser(user);
            }
        });
    }, [])
    return {
        user,
        error,
        signInUsingGoogle,
        logout
    }
}

export default useFirebase
