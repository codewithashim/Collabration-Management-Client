// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGb_cnSDbm9d1WZ7m9ie9v2RqSKlb9urQ",
  authDomain: "collabration-management.firebaseapp.com",
  projectId: "collabration-management",
  storageBucket: "collabration-management.appspot.com",
  messagingSenderId: "625381403824",
  appId: "1:625381403824:web:77019b7ef57f104ef91f75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;