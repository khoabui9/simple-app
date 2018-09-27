import firebase from 'firebase/app';
import 'firebase/firestore';
import {put,take,call, all,takeLatest, fork,takeEvery} from 'redux-saga/effects';
import {eventChannel} from 'redux-saga';
import {browserHistory} from 'react-router';
import * as UserActionTypes from '../actiontypes/user';

const config = {
    apiKey: "AIzaSyBlrYl7suPhBaAD2VMx9Yf90ezy9DPxSgU",
    authDomain: "agency-leroy-app.firebaseapp.com",
    projectId: "agency-leroy-app",
};

firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Disable deprecated features
db.settings({
    timestampsInSnapshots: true
});

db.collection("users").doc("admin").set({
        username: "admin",
        password: "123"
    })
    .then(function () {
        console.log("Document successfully written!");
    })
    .catch(function (error) {
        console.error("Error writing document: ", error);
    });


function checkAuthentication(user) {
    console.log(user)
    let userToCheck = db.collection("users").doc(user.username);
    return userToCheck.get()
    // .then((doc) => {
    //     if (doc.exists) {
    //         var username = doc.data().username;
    //         console.log(username + " dc ko day")
    //         console.log("Document data:", doc.data());
    //     } else {
    //         // doc.data() will be undefined in this case
    //         console.log("No such document!");
    //     }
    // })
}

function* loginWatcher() {
    yield takeLatest(UserActionTypes.LOGIN, loginWorker);
}

function* loginWorker(user) {
    try {
        var response = yield call(checkAuthentication, user);
        if (response.data().username != null) {
            console.log(response.data().username)
            yield put({ type: UserActionTypes.LOGIN })
            sessionStorage.setItem('user', response.data().username);
        } else{
            yield put({ type: UserActionTypes.LOGOUT })
        }
    } catch (error) {
        yield put({ type: UserActionTypes.LOGOUT })
    }
}

export default function* rootSaga() {
    yield all([
        loginWatcher()
      ])
 }