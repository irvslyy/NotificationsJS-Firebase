importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js');

var firebaseConfig = {
    apiKey: "AIzaSyDeZzBGb1rkWYLfcOH9fEEYByPlhbSOfPg",
    authDomain: "notif-2c233.firebaseapp.com",
    databaseURL: "https://notif-2c233.firebaseio.com",
    projectId: "notif-2c233",
    storageBucket: "notif-2c233.appspot.com",
    messagingSenderId: "1016240708483",
    appId: "1:1016240708483:web:667af2265648c887a834b6",
    measurementId: "G-LLM6VFNHJF"
};

firebase.initializeApp(firebaseConfig);
const messaging=firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(payload);
    const notification=JSON.parse(payload);
    const notificationOption={
        body:notification.body,
        icon:notification.icon
    };
    return self.registration.showNotification(payload.notification.title,notificationOption);
});