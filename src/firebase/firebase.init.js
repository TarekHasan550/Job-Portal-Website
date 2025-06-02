// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXpGT0S266XsLwRqPkIgELIhZNfUhvOwM",
  authDomain: "fir-withreact-cf334.firebaseapp.com",
  projectId: "fir-withreact-cf334",
  storageBucket: "fir-withreact-cf334.firebasestorage.app",
  messagingSenderId: "669053076996",
  appId: "1:669053076996:web:448bf8aa1563955dddd751"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
