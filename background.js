const targetEndpoints = [
  "https://chat.deepseek.com/api/v0/chat/completion",
  "https://chatgpt.com/backend-api/conversation"
];

chrome.webRequest.onCompleted.addListener(
  (details) => {
    if (details.statusCode === 200 && targetEndpoints.some(url => details.url.includes(url))) {
      chrome.tabs.sendMessage(details.tabId, { action: "playSound" });
    }
  },
  { urls: ["<all_urls>"] }
);