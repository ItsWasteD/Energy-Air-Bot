chrome.runtime.onInstalled.addListener(() => {
    new chrome.declarativeContent.ShowPageAction();
};