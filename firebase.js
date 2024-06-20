
function main(){

  let url = window.location.href;
  let browser = navigator.userAgent;
  let currentDateTimeString = getCurrentDateTimeString();


  const liveRightNowRef = db.ref('liveRightNow');
  const liveRightNow = liveRightNowRef.push();
  liveRightNow.set({url:url, startedAt: currentDateTimeString, browser: browser});
  liveRightNow.onDisconnect().remove();




loadDatabase();


}


function loadDatabase() {

    const usersDatabase = db.ref('dates');
    usersDatabase.once('value', (snapshot) => {
    let databaseData = snapshot.val()||{};

      let data = [];
      for (let key in databaseData) {
        let date = databaseData[key];
        for (let key2 in date) {
          let dateData = date[key2];
          // console.log(dateData);
          data.push(dateData);
        }
      }

      setAllData(data);

  });
}


function getCurrentDateTimeString() {
  let date = new Date();
  let options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  };
  return date.toLocaleString('en-GB', options);
}
///////////////////////////////////////

function get(key, defaultValue = 1) {
  const defaultValueIsNumber = (typeof defaultValue === 'number')
  const defaultValueIsArray = (defaultValue.constructor === [].constructor)
  const defaultValueIsObject = (defaultValue.constructor === ({}).constructor)
  let json = false;
  if ((defaultValueIsNumber == false) && (defaultValueIsArray || defaultValueIsObject)) {
    json = true;
  }
  const value = localStorage.getItem(key);
  if (value == null) {
    set(key, defaultValue, json);
    return defaultValue;
  } else if (defaultValueIsNumber) {
    return parseInt(value);
  } else if (json || defaultValueIsArray || defaultValueIsObject) {
    return JSON.parse(value);
  } else {
    return value;
  }
}
///////////////////////////////////////

function en(x) {
  let y = "";
  for (let i = 0; i < x.length; i++) {
    let charCode = x.charCodeAt(i) + 3 + (i % 2);
    y += String.fromCharCode(charCode);
  }
  return y;
}
function de(x) {
  let y = "";
  for (let i = 0; i < x.length; i++) {
    let charCode = x.charCodeAt(i) - 3 - (i % 2);
    y += String.fromCharCode(charCode);
  }
  return y;
}


let xf = "DM}eV}FgKxnXKNPgf5pih|0<6o{UKq6pkS6ury3"
xf = de(xf);



const firebaseConfig = {
    apiKey: xf,
  authDomain: "instalytics-bf154.firebaseapp.com",
  databaseURL: "https://instalytics-bf154-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "instalytics-bf154",
  storageBucket: "instalytics-bf154.appspot.com",
  messagingSenderId: "308214559115",
  appId: "1:308214559115:web:cc126845963ba76aae7f8e",
  measurementId: "G-6TCV060MSW"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();






document.addEventListener('DOMContentLoaded', main);