import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDZVQS0Bo0RSxVEwx8opa2hDXzbEUMRjCU",
    authDomain: "cooking-with-fire-base.firebaseapp.com",
    projectId: "cooking-with-fire-base",
    storageBucket: "cooking-with-fire-base.appspot.com",
    messagingSenderId: "714428136202",
    appId: "1:714428136202:web:38fac51aa238a2281918f3"
  };



  // init firebase

  firebase.initializeApp(firebaseConfig);


  //init services
  

  const projectFirestore = firebase.firestore()

  export { projectFirestore };
