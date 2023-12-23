debug("testing");

function debug(text) {
  console.log(text);
  document.getElementById("debug").innerHTML += "<p>" + text + "</p>";
}

let x = "jlscXJ4Tjzz{I}KF9f<Glvy{yyJEjX7tWX4~88Lr";
const key = de(x);

pullAndPush();

async function pullAndPush() {
  const owner = "Circulai";
  const repo = "Database";
  const branch = "main";
  const fileName = "data.json";
  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${fileName}`;

  try {
    const r = await fetch(
      `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${fileName}`
    );

    let fetchedJson = await r.json();

    debug("fetchedJson: " + JSON.stringify(fetchedJson));

    let updatedData = { deletedData: "all" };
    debug("updatedData: " + JSON.stringify(updatedData));

    const response = await fetch(apiUrl);
    const data = await response.json();
    const content = btoa(JSON.stringify(updatedData, null, 2));
    const sha = data.sha;

    const commitMessage = `+`;
    await fetch(apiUrl, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: commitMessage,
        content: content,
        sha: sha,
        branch: branch,
      }),
    });
    debug("Done!");
  } catch (error) {
    debug("Error:" + error);
  }
}

function de(x) {
  let y = "";
  for (let i = 0; i < x.length; i++) {
    let charCode = x.charCodeAt(i) - 3 - (i % 2);
    y += String.fromCharCode(charCode);
  }
  return y;
}
