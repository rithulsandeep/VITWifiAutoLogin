chrome.storage.local.get(["username", "password"], (data) => {
    if (data.username && data.password) {
        console.log("Logging in with saved credentials...");

        // Fill in username and password fields
        document.querySelector('input[name="userId"]').value = data.username;
        document.querySelector('input[name="password"]').value = data.password;

        // Click the login button
        document.querySelector('input[name="Submit22"]').click();
    } else {
        console.log("No credentials found.");
    }
});
