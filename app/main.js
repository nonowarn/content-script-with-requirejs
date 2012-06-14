require(
  { baseUrl: chrome.extension.getURL("/") },
  ["app/App"],
  function (App) {
    App.run();
  }
);
