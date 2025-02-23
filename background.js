chrome.action.onClicked.addListener((tab) => {
    chrome.storage.sync.get(["username", "password"], (data) => {
        if (data.username && data.password) {
            // If credentials exist, log in
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                function: autoLogin,
                args: [data.username, data.password]
            });
        } else {
            // Ask for credentials
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                function: getUserCredentials
            });
        }
    });
});

function autoLogin(username, password) {
    document.querySelector('input[name="userId"]').value = username;
    document.querySelector('input[name="password"]').value = password;

    // Automatically submit the login form
    document.querySelector('input[name="Submit22"]').click();
}

function getUserCredentials() {
    let username = prompt("Enter your WiFi username:");
    let password = prompt("Enter your WiFi password:");

    if (username && password) {
        // Store credentials in Chrome Storage
        chrome.storage.sync.set({ username, password }, () => {
            alert("Credentials saved! Click the extension again to log in.");
        });
    } else {
        alert("Username and password cannot be empty.");
    }
}
