import firebase from 'firebase';
import { FIREBASE_CONFIG } from '../config';

export const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);
export const firebaseAuth = firebaseApp.auth();
export const firebaseDb = firebaseApp.database();

const FireBaseTools = {

  /**
   * Return an instance of a firebase auth provider based on the provider string.
   *
   * @param provider
   * @returns {firebase.auth.AuthProvider}
   */
    getProvider: (provider) => {
        switch (provider) {
        case 'email':
            return new firebase.auth.EmailAuthProvider();
        case 'facebook':
            return new firebase.auth.FacebookAuthProvider();
        case 'github':
            return new firebase.auth.GithubAuthProvider();
        case 'google':
            return new firebase.auth.GoogleAuthProvider();
        case 'twitter':
            return new firebase.auth.TwitterAuthProvider();
        default:
            throw new Error('Provider is not supported!!!');
        }
    },

  /**
   * Login with provider => p is provider "email", "facebook", "github", "google", or "twitter"
   * Uses Popup therefore provider must be an OAuth provider. EmailAuthProvider will throw an error
   *
   * @returns {any|!firebase.Thenable.<*>|firebase.Thenable<any>}
   */
    loginWithProvider: (p) => {
        const provider = FireBaseTools.getProvider(p);
      //  console.log('provider', provider)
        return firebaseAuth.signInWithPopup(provider)
        .then(() => {window.localStorage['currentUser'] = firebaseAuth.currentUser})
        .catch(error => ({
            errorCode: error.code,
            errorMessage: error.message,
        }));
    },

  /**
   * Sign the user out
   *
   * @returns {!firebase.Promise.<*>|firebase.Thenable<any>|firebase.Promise<any>|!firebase.Thenable.<*>}
   */
    logoutUser: () => firebaseAuth.signOut().then(() => ({
        success: 1,
        message: 'logout',
    })),

  /**
   * Retrieve the current user (Promise)
   * @returns {Promise}
   */
    fetchUser: () => new Promise((resolve, reject) => {
        const unsub = firebaseAuth.onAuthStateChanged((user) => {
            unsub();
            resolve(user);
        }, (error) => {
            reject(error);
        });
    }),

};

export default FireBaseTools;
