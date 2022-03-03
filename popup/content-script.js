'use strict';

function registerScript() {
  chrome.runtime.sendMessage({
    message: 'Run the script',
  });
}

document.querySelector("#register").addEventListener('click', registerScript);
