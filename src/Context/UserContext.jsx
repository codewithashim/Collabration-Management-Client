/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { createContext } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"; 
import app from "../Firebase/Firebase"

export const AuthContext = createContext();
const auth = getAuth(app);
const storage = getStorage(app); 

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sign Up with Profile Picture
  const signUpWithProfilePicture = async (
    email,
    password,
    profilePictureFile
  ) => {
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      if (profilePictureFile) {
        // Create a reference to the profile picture in Firebase Storage
        const storageRef = ref(storage, `profilePictures/${user.uid}`);

        // Upload the profile picture to Firebase Storage
        await uploadBytes(storageRef, profilePictureFile);

        // Update the user's profile with the profile picture URL
        const profilePictureURL = await getDownloadURL(storageRef);
        await updateProfile(auth.currentUser, {
          photoURL: profilePictureURL,
        });

        // Update the user object in your state
        setUser(auth.currentUser);
      }

      setLoading(false);
      return userCredential;
    } catch (error) {
      setError(error.message);
      setLoading(false);
      throw error;
    }
  };

  const updateUserDetails = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

  // Sign In
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign Out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider);
  };

  // watch user state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);

  const userInfo = {
    signUp: signUpWithProfilePicture,
    signIn,
    logOut,
    setError,
    error,
    loading,
    updateUserDetails,
    signInWithGoogle,
    user,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
