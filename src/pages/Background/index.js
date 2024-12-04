import { getBaekjoonProblemNumber } from '../../utils';

function updateIcon(problemNumber) {
  chrome.action.setIcon({
    path: {
      128: `128x128${typeof problemNumber === 'number' ? '' : '-disable'}.png`,
    },
  });
}

chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    if (!tab.url) {
      return;
    }

    const problemNumber = getBaekjoonProblemNumber(tab.url);

    updateIcon(problemNumber);
  });
});

chrome.tabs.onUpdated.addListener((tabId) => {
  chrome.tabs.get(tabId, (tab) => {
    if (!tab.url) {
      return;
    }

    const problemNumber = getBaekjoonProblemNumber(tab.url);

    updateIcon(problemNumber);
  });
});
