document.getElementById("fillForm").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0) {
        const tabId = tabs[0].id;
        chrome.tabs.sendMessage(tabId, { action: "fillForm" }, (response) => {
          if (chrome.runtime.lastError) {
            console.error(`Error: ${chrome.runtime.lastError.message}`);
          } else {
            console.log(response.status);
          }
        });
      } else {
        console.error("No active tab found.");
      }
    });
  });
  