import { useState, useEffect } from 'react'
import initializeAuthentication from '../Pages/Login/Firebase/firebase.initialize';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

initializeAuthentication();
function useFirebase() {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                console.log(result.user);
            }).catch((err => {
                setError(err.message);
            }))
    }
    const signInUsingGithub = () => {
        signInWithPopup(auth, githubProvider)
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
            } else {
                setUser({});
            }
        });
    }, [])
    return {
        user,
        error,
        signInUsingGoogle,
        signInUsingGithub,
        logout
    }
}

export default useFirebase
