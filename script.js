async function start() {
  document.getElementById("loadedData").innerHTML = window.navigator.userAgent;
  //save to local storage

  visitCount = localStorage.getItem("visitCount");
  if (visitCount == null) {
    visitCount = 0;
  }
  visitCount = parseInt(visitCount);
  visitCount = visitCount + 1;
  localStorage.setItem("visitCount", visitCount);
  document.getElementById("visitCount").innerHTML = visitCount;

  //return;
  const ip = await fetch("https://api.ipify.org");
  const ipText = await ip.text();
  console.log(ipText);
  document.getElementById("ip").innerHTML = ipText;

  //   localStorage.removeItem("visitCount");
  //delete localStorage["visitCount"];
}

start();

async function commitFile() {
  const owner = "Circulai";
  const repo = "Circulai.github.io";
  const branch = "main"; // or the branch you want to commit to
  const path = "data.json"; // path to your JSON file
  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;

  try {
    return;
    const r = await fetch(
      "https://raw.githubusercontent.com/Circulai/Circulai.github.io/main/data.json"
    );
    // console.log(r.status);

    const rJson = await r.json();
    console.log(rJson);

    document.getElementById("loadedData").innerHTML = JSON.stringify(rJson);

    views = rJson["views"];
    views = parseInt(views);
    user = rJson["user"];
    IP = rJson["user"]["IP-Address"];
    lastVisited = rJson["user"]["lastVisited"];
    visitCount = rJson["user"]["visitCount"];
    console.log(views);
    views = views + 1;
    rJson["views"] = views; //views + 1000;
    console.log(rJson["views"]);

    // return;

    const response = await fetch(apiUrl);
    const data = await response.json();
    updatedData = rJson;
    const content = btoa(JSON.stringify(updatedData, null, 2));
    const sha = data.sha;

    const commitMessage = `${views} views`;
    ////
    // COMMENTED OUT FOR NOW BECAUSE IT GIVES ERROR
    // const commitUrl = `https://api.github.com/repos/${owner}/${repo}/git/refs/heads/${branch}`;
    // const commitData = {
    //   sha: sha,
    //   force: true,
    // };
    // //Gives error
    // await fetch(commitUrl, {
    //   method: "PATCH",
    //   headers: {
    //     Authorization: `Bearer ${x}`,
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(commitData),
    // });
    ////

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

    // alert("File committed successfully!");
  } catch (error) {
    console.error("Error:", error);
    // alert("Error committing file. Check the console for details.");
  }
}

function get(x) {
  let ordered = x.slice().sort((a, b) => a[0] - b[0]);
  let myString = ordered.map((pair) => String.fromCharCode(pair[1])).join("");
  //   console.log(myString);
  return myString;
}

let x = [
  [30, 52],
  [0, 103],
  [36, 53],
  [35, 122],
  [3, 95],
  [16, 54],
  [2, 112],
  [32, 84],
  [33, 84],
  [1, 104],
  [34, 49],
  [17, 98],
  [37, 52],
  [38, 73],
  [39, 110],
  [6, 49],
  [18, 57],
  [29, 84],
  [7, 80],
  [27, 65],
  [5, 70],
  [19, 67],
  [25, 117],
  [26, 71],
  [22, 118],
  [4, 85],
  [20, 105],
  [24, 118],
  [23, 119],
  [13, 121],
  [11, 119],
  [28, 103],
  [12, 70],
  [31, 112],
  [21, 114],
  [14, 72],
  [9, 118],
  [15, 66],
  [8, 103],
  [10, 119],
];

x = get(x);
