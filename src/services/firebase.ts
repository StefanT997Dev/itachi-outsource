import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiIrcA_3yCIiCaetPfo1K3m4cFQVg9uiE",
  authDomain: "itachi-outsource.firebaseapp.com",
  projectId: "itachi-outsource",
  storageBucket: "itachi-outsource.appspot.com",
  messagingSenderId: "818133031197",
  appId: "1:818133031197:web:9e9647e096d56f19f7a9f4",
  measurementId: "G-DWZZ8Y69H8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
