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
}

function* loginWatcher() {
    yield takeLatest(UserActionTypes.LOGIN_REQUESTING, loginWorker);
}

function* loginWorker(user) {
    console.log("dafug")
    try {
        var response = yield call(checkAuthentication, user);
        if (response.data().username != null) {
            console.log(response.data().username + "dc day")
            sessionStorage.setItem("user", response.data().username)
            yield put({ type: UserActionTypes.LOGIN , response})
        } else{
            console.log('dieu vl 1')
            yield put({ type: UserActionTypes.LOGOUT })
            sessionStorage.clear('user');
        }
    } catch (error) {
        console.log('dieu vl 2')
        yield put({ type: UserActionTypes.LOGOUT })
        sessionStorage.clear('user');
    }
}

export default function* rootSaga() {
    yield all([
        loginWatcher()
      ])
 }