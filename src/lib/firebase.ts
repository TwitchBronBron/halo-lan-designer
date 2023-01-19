// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { authService } from './services/authService';
import { db } from './db';

const firebaseConfig = {
    apiKey: 'AIzaSyAQcmwWlCbv9yNfwJKU0mctt8KQddP7F7s',
    authDomain: 'halo-lan-designer.firebaseapp.com',
    projectId: 'halo-lan-designer',
    storageBucket: 'halo-lan-designer.appspot.com',
    messagingSenderId: '330252567802',
    appId: '1:330252567802:web:1c166e25845269aad3b543',
    measurementId: 'G-3VPKG891SM'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const authProvider = new GoogleAuthProvider();
authProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');
authProvider.setCustomParameters({
    prompt: "select_account"
  });

export const auth = getAuth();
auth.useDeviceLanguage();
authService.init(auth, authProvider);

// export const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
db.init(firestore, authService);
