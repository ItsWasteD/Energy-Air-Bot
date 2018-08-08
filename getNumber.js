chrome.runtime.onInstalled.addListener(() => {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'game.energy.ch'}
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
});
