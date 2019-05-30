//import firebase from 'firebase/app';

//var firebase = require('firebase/app');
//import * as firebase from 'firebase/app';

/*import 'firebase/auth';
import 'firebase/database';*/

//require('firebase/auth');
//require('firebase/database');

import { firebaseConfig } from './config';

const firebase = require('firebase');



export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebase.auth();
export const firebaseDb = firebase.database();
