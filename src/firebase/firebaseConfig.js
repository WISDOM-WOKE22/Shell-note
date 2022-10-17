import firebase from 'firebase/app'
import 'firebase/auth'
import  'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBIeENcTcBoYxnrwU9gSAmNSBURziv0SQQ",
    authDomain: "shell-note.firebaseapp.com",
    projectId: "shell-note",
    storageBucket: "shell-note.appspot.com",
    messagingSenderId: "1048542737052",
    appId: "1:1048542737052:web:30981e0fe78d0523ef3359"
  };

  // initializing service
  firebase.initializeApp(firebaseConfig)

  // initialize services
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  const timestamp = firebase.firestore.Timestamp

  export { projectAuth, projectFirestore, timestamp }