chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed and running.");
});

// Listen for tab updates
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && tab.url) {
        if (tab.url.includes("phc.prontonetworks.com/redirect.html")) {
            console.log("Detected WiFi login page. Injecting script.");
            chrome.scripting.executeScript({
                target: { tabId: tabId },
                files: ["content.js"]
            });
        }
    }
});
