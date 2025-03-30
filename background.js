const targetEndpoints = [
  "https://chat.deepseek.com/api/v0/chat/completion",
  "https://chatgpt.com/backend-api/conversation"
];

chrome.webRequest.onCompleted.addListener(
  (details) => {
    try {
      if (details.statusCode === 200 && 
          targetEndpoints.some(url => details.url.includes(url))) {
        chrome.tabs.sendMessage(details.tabId, { action: "playSound" })
          .catch(err => console.log("Tab not found:", err));
      }
    } catch (error) {
      console.error("Error handling request:", error);
    }
  },
  { urls: ["https://chat.deepseek.com/*", "https://chatgpt.com/*"] } // Match host permissions
);