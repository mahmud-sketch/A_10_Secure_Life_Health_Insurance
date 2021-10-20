import { useState, useEffect } from 'react'
import initializeAuthentication from '../Firebase/firebase.initialize';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

initializeAuthentication();
function useFirebase() {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const [errMessage, setErrMessage] = useState('');
    //r
    const [isLoading, setIsLoading] = useState(true);



    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // const signInUsingGoogle = () => {
    //     signInWithPopup(auth, googleProvider)
    //         .then((result) => {
    //             setUser(result.user);
    //             console.log(result.user);
    //         }).catch((err => {
    //             setError(err.message);
    //         }))
    // }
    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);

    }


    const registerUsingMailandPassword = (name, email, password) => {

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                console.log(result.user);
                setUserName(name);
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
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            // An error happened.
        }).finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                console.log(user);
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])
    return {
        user,
        error,
        signInUsingGoogle,
        registerUsingMailandPassword,
        logout,
        processLogin,
        setUserName,
        setIsLoading,
        isLoading
    }
}

export default useFirebase
