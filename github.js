///////////////////// Global Deep
const owner = "Circulai";
const repo = "CRM";
const branch = "main"; // or the branch you want to commit to
const fileName = "data.json"; // path to your JSON file
let x = "jlscynnsMjy=GNYLfvN{j^tyznSG7QOWDW5qK}Tk";
x = de(x);
const urlRepo = `https://api.github.com/repos/${owner}/${repo}/contents/${fileName}`;

const usePrivateRepo = true;
const syncIntervalMillisec = 10000 // 60000 milliseconds = 1 minute


async function getGitHubJson() {
  const fileInfo = await getGithubFileInfo();
  const stringOfJsonDatabase = atob(fileInfo.content);
  let databaseJson = JSON.parse(stringOfJsonDatabase);
  return databaseJson;
}



async function saveDataToGithub() {
  const fileInfo = await getGithubFileInfo();
  const stringOfJsonDatabase = atob(fileInfo.content);
  let databaseJson = JSON.parse(stringOfJsonDatabase);
  databaseJson = addDataToDatabaseJson(databaseJson);
  saveJsonToGithub(databaseJson, fileInfo.sha);
}

async function getGithubFileInfo() {
  let response = await fetch(urlRepo, {
    headers: {
      Authorization: `token ${x}`
    }
  });
  const data = await response.json();
  return data
}

async function saveJsonToGithub(jsonToSave, sha) {
  try {
    const dateString = getDateTimeString();
    const commitMessage = `${dateString}`;
    const contentBits = btoa(JSON.stringify(jsonToSave, null, 2));
    const requestBody = JSON.stringify({ message: commitMessage, content: contentBits, sha: sha, branch: branch });
    const finalResponse = await fetch(urlRepo, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${x}`,
        "Content-Type": "application/json",
      },
      body: requestBody
    });
    if (finalResponse.status === 200) {

      onSuccessfullPush();

    } else {
    }
  } catch (e) {
    console.log("couldn't push to github. trying again in " + syncIntervalMillisec)
    setTimeout(checkIfItsTimeToSyncUserData, syncIntervalMillisec);
  }
}
///////////////////// 

function getDateTimeString() {
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



function checkIfItsTimeToSyncUserData() {
  var currentTime = new Date().getTime();
  var lastSyncTime = localStorage.getItem('lastSyncTime');
  const milliseconds = (currentTime - lastSyncTime)
  if (!lastSyncTime || milliseconds > syncIntervalMillisec) { 
      saveDataToGithub();
  
      localStorage.setItem('lastSyncTime', currentTime);
  } else {
    console.log('syncLeft:',milliseconds);
  }
}

///////////////////// X
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
