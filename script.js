// script.js
async function commitFile() {
    const accessToken = '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';
    const owner = 'Circulai';
    const repo = 'Circulai.github.io';
    const branch = 'main'; // or the branch you want to commit to
    const path = 'data.json'; // path to your JSON file

    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;

    try {
        // Fetch the current content of the file
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Modify your JSON data here or replace it entirely
        const updatedData = {
            key: 'Hello world',
            updated: true
        };

        // Update the content
        const content = btoa(JSON.stringify(updatedData, null, 2));
        const sha = data.sha;

        // Create a commit
        const commitMessage = 'Update data.json';
        const commitUrl = `https://api.github.com/repos/${owner}/${repo}/git/refs/heads/${branch}`;
        const commitData = {
            sha: sha,
            force: true
        };

        await fetch(commitUrl, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(commitData)
        });

        // Commit the changes
        await fetch(apiUrl, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: commitMessage,
                content: content,
                sha: sha,
                branch: branch
            })
        });

        alert('File committed successfully!');
    } catch (error) {
        console.error('Error:', error);
        alert('Error committing file. Check the console for details.');
    }
}

