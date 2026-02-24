// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXaYKuDuV55xAgTtM-SfXcX9Hl1fII-w8",
  authDomain: "webcafe-2026.firebaseapp.com",
  projectId: "webcafe-2026",
  storageBucket: "webcafe-2026.firebasestorage.app",
  messagingSenderId: "1053077994631",
  appId: "1:1053077994631:web:0cafdf461bbbe6e5100c22",
  measurementId: "G-WMX795S6LK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);