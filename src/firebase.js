import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAwpmQJf-oRvNvzJA39sBlI3xRlZcwYTls",
    authDomain: "todo-react-2313b.firebaseapp.com",
    databaseURL: "https://todo-react-2313b.firebaseio.com",
    projectId: "todo-react-2313b",
    storageBucket: "todo-react-2313b.appspot.com",
    messagingSenderId: "30158160191",
    appId: "1:30158160191:web:b8732de372054bf9e2938a"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp;