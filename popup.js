document.addEventListener("DOMContentLoaded", async () => {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const saveButton = document.getElementById("saveCredentials");
    const loginButton = document.getElementById("loginButton");
    const loginForm = document.getElementById("loginForm");
    const loginButtonContainer = document.getElementById("loginButtonContainer");

    // Check if credentials already exist
    chrome.storage.local.get(["username", "password"], (data) => {
        if (data.username && data.password) {
            loginForm.style.display = "none";
            loginButtonContainer.style.display = "block";
        }
    });

    // Save credentials
    saveButton.addEventListener("click", () => {
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username && password) {
            chrome.storage.local.set({ username, password }, () => {
                alert("Credentials saved!");
                loginForm.style.display = "none";
                loginButtonContainer.style.display = "block";
            });
        } else {
            alert("Please enter both username and password.");
        }
    });

    // Login when button is clicked
    loginButton.addEventListener("click", async () => {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

        if (tab.url.includes("phc.prontonetworks.com/cgi-bin/authlogin")) {
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                files: ["content.js"]
            });
        } else {
            alert("Please go to the WiFi login page first.");
        }
    });
});
