import { useState, useEffect } from 'react'
import initializeAuthentication from '../Firebase/firebase.initialize';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

initializeAuthentication();
function useFirebase() {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const [errMessage, setErrMessage] = useState('');


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

    const registerUsingMailandPassword = (email, password) => {

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                console.log(result.user);
                setUserName();
            }).catch((err => {
                setError(err.message);
            }))
    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                console.log(res.user);
                setErrMessage('');

            })
            .catch((error) => {
                setErrMessage(error.message);

            });
    }

    const setUserName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(res => { })

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
        registerUsingMailandPassword,
        logout,
        processLogin,
        setUserName
    }
}

export default useFirebase
