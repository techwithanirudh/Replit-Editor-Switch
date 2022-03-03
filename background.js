"use strict";

var registered = null;

async function registerScript(message) {
  if (registered) {
    registered.unregister();
  }

  registered = chrome.tabs.executeScript(null, {
    code: `
    URL =
    "https://gist.githubusercontent.com/techwithanirudh/b6f0cec5275c8dcf75e15dc5c79a0177/raw/replitMultiEditor.js";
  response = fetch(URL);
  response.then((response) => {
    response.text().then((script) => {
      eval(script);
    });
  });
  
    `,
  });
}

chrome.runtime.onMessage.addListener(registerScript);
