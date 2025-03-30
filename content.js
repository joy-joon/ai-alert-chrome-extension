const statusIcon = document.createElement('img');
statusIcon.className = window.location.hostname === "chat.openai.com" ? 'extension-status-icon' : 'chat-gpt-icon';
statusIcon.src = chrome.runtime.getURL('icon.svg');
document.body.appendChild(statusIcon);

chrome.runtime.onMessage.addListener((request) => {
  if (request.action === "playSound") {
    const audio = new Audio(chrome.runtime.getURL("notification.mp3"));
    audio.play().catch(error => console.log("Audio error:", error));
    
    statusIcon.style.opacity = '1';
    setTimeout(() => statusIcon.style.opacity = '0.5', 1000);
  }
});