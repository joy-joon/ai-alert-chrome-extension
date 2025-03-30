const statusIcon = document.createElement('img');
statusIcon.className = 'extension-status-icon';
statusIcon.src = chrome.runtime.getURL('icon.png');
document.body.appendChild(statusIcon);

chrome.runtime.onMessage.addListener((request) => {
  if (request.action === "playSound") {
    const audio = new Audio(chrome.runtime.getURL("notification.mp3"));
    audio.play().catch(error => console.log("Audio error:", error));
    
    // Some visual feedback
    statusIcon.style.opacity = '1';
    setTimeout(() => statusIcon.style.opacity = '0.5', 1000);
  }
});