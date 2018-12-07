import firebase from 'firebase/app';
import 'firebase/firebase-database';
import { dbconfig } from '../config';

firebase.initializeApp(dbconfig);

export const db = firebase.database();

