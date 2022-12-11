const insert = (content) => {
  const element = document.querySelector('[data-text="true"]');

  if (!element) {
    return;
  }

  element.textContent = content.trim();

  return {
    status: "success",
  };
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === "inject") {
    const { content } = request;

    const result = insert(content);

    if (!result) {
      sendResponse({ status: "failed" });
    }

    sendResponse({ status: "success" });
  }
});
