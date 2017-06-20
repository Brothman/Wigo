import Rebase from 're-base';
import firebase from 'firebase/app';
import database from 'firebase/database';
import 'firebase/auth';

var app = firebase.initializeApp({
  apiKey: 'AIzaSyCpvK1l7hMmZaNHh9DkzHKyFE0k09Ab4lA',
  authDomain: "wigo-f0bfa.firebaseapp.com",
  databaseURL: "https://wigo-f0bfa.firebaseio.com",
  projectId: "wigo-f0bfa"
});

var db = database(app);
var base = Rebase.createClass(db);

export default base;
