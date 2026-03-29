chrome.action.onClicked.addListener(async (tab) => {
  try {
    // Inject CSS first
    await chrome.scripting.insertCSS({
      target: { tabId: tab.id },
      files: ["modal.css"]
    });

    // Inject JS
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content.js"]
    });

    // Send message
    await chrome.tabs.sendMessage(tab.id, {
      type: "TOGGLE_SIDEBAR"
    });

  } catch (err) {
    console.error("Error:", err);
  }
});