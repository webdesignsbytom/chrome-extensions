console.log('main.js');

document.getElementById('toggleBlocker').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ['src/scripts/content.js']
      });
    });
  });
  