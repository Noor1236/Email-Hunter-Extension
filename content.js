// Function to send a message to the background script and fetch page content
function fetchPageContent(url) {
  return new Promise((resolve, reject) => {
      chrome.runtime.sendMessage({ action: 'fetchPageContent', url }, response => {
          if (chrome.runtime.lastError) {
              reject(chrome.runtime.lastError);
          } else if (response.error) {
              reject(new Error(response.error));
          } else {
              resolve(response.content);
          }
      });
  });
}

// Usage example: Fetch and handle page content
fetchPageContent('https://www.arbisoft.com/')
  .then(content => {
      // Handle the fetched content here
      console.log(content);
  })
  .catch(error => {
      console.error('Error:', error);
  });


        // content.js or popup.js

        chrome.runtime.sendMessage(
            { action: "fetchData", url: "https://corsproxy.io/data", method: "GET", headers: {} },
            response => {
                if (!chrome.runtime.lastError) {
                    if (response.error) {
                        console.error("Error fetching data:", response.error);
                    } else {
                        console.log("Fetched data:", response);
                        // Process the response data
                    }
                }
            }
        );
        


