import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBj5ekVGfGFzsloSPS1vb7hjzJmGi_OP3I",
    authDomain: "crwn-db-c4cb7.firebaseapp.com",
    databaseURL: "https://crwn-db-c4cb7.firebaseio.com",
    projectId: "crwn-db-c4cb7",
    storageBucket: "crwn-db-c4cb7.appspot.com",
    messagingSenderId: "659398773728",
    appId: "1:659398773728:web:951e564e3d8f044655f985",
    measurementId: "G-0EQPBS2N28" 
}


export const createUserProfileDocument = async( userAuth,additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot =  await userRef.get();
   if(!snapShot.exists){
       const {displayName,email} = userAuth;
       const createdAt = new Date();

       try{
          await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
          })
       } catch(error){

        console.log('error creating user', error.message)

       }
   }
   return userRef;
}
 
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;