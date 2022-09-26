import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBCJtANbYQtjJAsk9VlTYupGAbm2OL-uWY',
  authDomain: 'tori-fd145.firebaseapp.com',
  databaseURL:
    'https://tori-fd145-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'tori-fd145',
  storageBucket: 'tori-fd145.appspot.com',
  messagingSenderId: '751039446295',
  appId: '1:751039446295:web:a0d65a49264839d55e8b52',
  measurementId: 'G-9G15L46N84',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//	Init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectAuth, projectFirestore };
