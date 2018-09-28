import * as firebase from 'firebase/app';
import 'firebase/auth';

// const config = {
//   apiKey: "AIzaSyBL54dxmcUSaNOpdn07aoHrzM3Ys-mYvmU",
//   authDomain: "example-project-a6b97.firebaseapp.com",
//   databaseURL: "https://example-project-a6b97.firebaseio.com",
//   projectId: "example-project-a6b97",
//   storageBucket: "example-project-a6b97.appspot.com",
//   messagingSenderId: "57005010803"
// };
const config = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATA_BASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);
