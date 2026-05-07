// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCda1w5rG1_CJ6XNJtoPl1bMCzIIRMts84",
    authDomain: "dragone-news-project-9989a.firebaseapp.com",
    projectId: "dragone-news-project-9989a",
    storageBucket: "dragone-news-project-9989a.firebasestorage.app",
    messagingSenderId: "492821959618",
    appId: "1:492821959618:web:aa69821cbb94fcdce5bc5b",
    measurementId: "G-Z8SRZK0J1X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;