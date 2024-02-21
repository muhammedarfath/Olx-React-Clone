import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
  } from 'firebase/auth';
  import { useNavigate } from 'react-router-dom';
  import { createContext, useEffect, useMemo, useState,useContext } from 'react';
import { auth } from '../firebase/firebase';
 
  
  const AuthContext = createContext();
  
  export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [initialLoading, setInitialLoading] = useState(true);
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // Logged in...
          setUser(user);
          setLoading(false);
        } else {
          // Not logged in...
          setUser(null);
          setLoading(true);
          navigate('/');
        }
  
        setInitialLoading(false);
      });
  
      return () => unsubscribe();
    }, [navigate]);
  
    const SignUp = async (email, password) => {
      setLoading(true);
  
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential)
          setUser(userCredential.user);
          alert('welcome to olx website')
          navigate('/');
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    };
  
    const SignIn = async (email, password) => {
      setLoading(true);
  
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setUser(userCredential.user);
          navigate('/');
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          alert(error)
          setLoading(false);
        });
    };
  
    const logout = async () => {
      setLoading(true);
      signOut(auth)
        .then(() => {
          setUser(null);
        })
        .catch((error) => {
          setError(error.message);
        })
        .finally(() => setLoading(false));
    };
  
    const value = useMemo(
      () => ({
        user,
        SignUp,
        SignIn,
        loading,
        logout,
        error,
      }),
      [user, loading, error]
    );
  
    return (
      <AuthContext.Provider value={value}>
        {!initialLoading && children}
      </AuthContext.Provider>
    );
  };

  export default function useAuth() {
    return useContext(AuthContext);
  }
  