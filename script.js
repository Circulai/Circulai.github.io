function getTimeDateString() {
  let date = new Date();
  let time = date.toLocaleTimeString();
  let dateString = date.toLocaleDateString();
  return dateString + " " + time;
}

function incrementLocalStorageInt(key) {
  let localValue = localStorage.getItem(key);
  if (localValue == null) {
    localValue = 0;
  }
  localValue = parseInt(localValue);
  localValue = localValue + 1;
  localStorage.setItem("visitCount", localValue);
  debug(key + localValue);
}

function addCurrentDateToLocalStorage(key) {
  let localValue = localStorage.getItem(key);
  if (localValue != null) {
    localValue = JSON.parse(localValue);
  } else {
    localValue = [];
  }
  console.log(localValue);
  localValue.push(getTimeDateString());
  localStorage.setItem(key, JSON.stringify(localValue));
  debug(key + localValue);
}

function debug(text) {
  console.log(text);
  document.getElementById("debug").innerHTML += "<p>" + text + "</p>";
}

function set(x) {
  let y = "";
  for (let i = 0; i < x.length; i++) {
    let charCode = x.charCodeAt(i) + 900 + (i % 2);
    y += String.fromCharCode(charCode);
  }
  return y;
}

function get(x) {
  let y = "";
  for (let i = 0; i < x.length; i++) {
    let charCode = x.charCodeAt(i) - 900 - (i % 2);
    y += String.fromCharCode(charCode);
  }
  return y;
}

document.addEventListener("DOMContentLoaded", onLoad);

function onLoad() {
  debug("onLoad");
  incrementLocalStorageInt("localVisitCount");
  addCurrentDateToLocalStorage("localVisitDates");
}

async function save() {
  // console.log("save");
  debug("save");
  let x = "ϫϭϴϤϙϋεϕϫϻϻϼϊϾόχκϧνψϭϷϺϼϺϺϋφϫϙθϵϘϙεϿιιύϳ";
  x = get(x);

  // debug("x: " + x);

  const owner = "Circulai";
  const repo = "Circulai.github.io";
  const branch = "main"; // or the branch you want to commit to
  const path = "visitsLog.json"; // path to your JSON file
  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;

  try {
    const r = await fetch(
      `https://raw.githubusercontent.com/Circulai/Circulai.github.io/main/${path}`
    );
    // console.log(r.status);
    const fetchedJson = await r.json();
    console.log(fetchedJson);

    debug("Fetched JSON: " + JSON.stringify(fetchedJson));
    const userCount = fetchedJson.length;
    debug("list length: " + fetchedJson.length);

    const userAgenString = window.navigator.userAgent;
    const ip = await fetch("https://api.ipify.org");
    const userString = ip + "," + userAgenString;
    const userStringEncrypted = set(userString);

    let userID = localStorage.getItem("userID");
    let user = null;

    if (userID == null || userID > userCount) {
      userID = userCount;
      localStorage.setItem("userID", userID);
      user = {
        user: userStringEncrypted,
        visits: [],
        localVisits: [],
        visitCount: 0,
        localVisitCounts: 0,
      };
      fetchedJson.push(user);
    } else {
      user = fetchedJson[userID];
    }
    user["visitDates"].push(getTimeDateString());
    user["localVisitCount"] = localStorage.getItem("localVisitCount");
    user["visitCount"] = user["visitCount"] + 1;
    user["localVisitDates"] = localStorage.getItem("localVisitDates");
    fetchedJson[userID] = user;

    updatedData = fetchedJson;
    const response = await fetch(apiUrl);
    const data = await response.json();
    const content = btoa(JSON.stringify(updatedData, null, 2));
    const sha = data.sha;

    const commitMessage = `${views} views`;
    // Commit the changes
    await fetch(apiUrl, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${x}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: commitMessage,
        content: content,
        sha: sha,
        branch: branch,
      }),
    });
    console.log("Done!");
  } catch (error) {
    console.error("Error:", error);
  }
}

// async function commitFile() {
//   return; // function disabled for now

//   const owner = "Circulai";
//   const repo = "Circulai.github.io";
//   const branch = "main"; // or the branch you want to commit to
//   const path = "data.json"; // path to your JSON file
//   const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;

//   try {
//     const r = await fetch(
//       "https://raw.githubusercontent.com/Circulai/Circulai.github.io/main/data.json"
//     );
//     // console.log(r.status);

//     const rJson = await r.json();
//     console.log(rJson);

//     document.getElementById("loadedData").innerHTML = JSON.stringify(rJson);

//     views = rJson["views"];
//     views = parseInt(views);
//     user = rJson["user"];
//     IP = rJson["user"]["IP-Address"];
//     lastVisited = rJson["user"]["lastVisited"];
//     visitCount = rJson["user"]["visitCount"];
//     console.log(views);
//     views = views + 1;
//     rJson["views"] = views; //views + 1000;
//     console.log(rJson["views"]);

//     // return;

//     const response = await fetch(apiUrl);
//     const data = await response.json();
//     updatedData = rJson;
//     const content = btoa(JSON.stringify(updatedData, null, 2));
//     const sha = data.sha;

//     const commitMessage = `${views} views`;
//     // Commit the changes
//     await fetch(apiUrl, {
//       method: "PUT",
//       headers: {
//         Authorization: `Bearer ${x}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         message: commitMessage,
//         content: content,
//         sha: sha,
//         branch: branch,
//       }),
//     });
//     console.log("Done!");
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

save();
