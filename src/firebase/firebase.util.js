import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = 
    {
        apiKey: "AIzaSyDAfOVwkn-qshqvUqmcqe6aAoUDGkfQhaM",
        authDomain: "tnh-estore.firebaseapp.com",
        projectId: "tnh-estore",
        storageBucket: "tnh-estore.appspot.com",
        messagingSenderId: "41893178033",
        appId: "1:41893178033:web:74c84a4fcdb68388da5090",
        measurementId: "G-Z5Z167FHT0"
      };

      export const createUserProfileDocument = async (userAuth, additionalData ) =>{
        if(!userAuth) return;
        
        const userRef = firestore.doc(`users/${userAuth.uid}`);
        const snapShot = await userRef.get();

        if(!snapShot.exists){
          const {displayName, email} = userAuth;
          const createAt = new Date();

          try{
            await userRef.ser({
              displayName,
              email,
              createAt,
              ...additionalData
            })
          }
          catch(error){
            console.log('error creating user', error.message);  
          }
        }
        
        return userRef; 
      }
       

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promp:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;






