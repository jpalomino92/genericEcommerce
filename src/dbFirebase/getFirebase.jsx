import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAmtYdahz1E6x3Wv-JbC0qJ6LHZU-0nQDg",
    authDomain: "e-commercepalomino.firebaseapp.com",
    projectId: "e-commercepalomino",
    storageBucket: "e-commercepalomino.appspot.com",
    messagingSenderId: "236377842056",
    appId: "1:236377842056:web:52b770abcd631d9dc11a3d"
  };


const app = firebase.initializeApp(firebaseConfig)


export function getFirebase(){
   return app
}

function getFirestore(){
    
    return firebase.firestore(app)

}

export default getFirestore