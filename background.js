
// // // import { fetchPageContent } from './fetchPageContent'; // Make sure to adjust the import path


// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if (request.action === 'fetchPageContents') {
//         const urls = request.urls;

//         const fetchPromises = urls.map(async url => {
//             try {
//                 const response = await fetchPageContent(url);
//                 return { url, content: response };
//             } catch (error) {
//                 console.error(`Error fetching content from ${url}:`, error);
//                 return { url, content: null };
//             }
//         });

//         Promise.all(fetchPromises).then(contents => {
//             sendResponse({ contents });
//         });

//         return true; // Enable asynchronous response
//     }
// });

// // Function to fetch page content
// async function fetchPageContent(url) {
//     try {
//         const response = await fetch(url, {
//             mode: 'cors',
//             headers: {
//                 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36'
//             }
//         });

//         if (!response.ok) {
//             console.error(`Failed to fetch page content. Response status: ${response.status}`);
//             return null; // Return null or another value to indicate failure
//         }

//         const content = await response.text();
//         return content;
//     } catch (error) {
//         console.error('Error fetching page content:', error);
//         return null; // Return null or another value to indicate failure
//     }
// }

// chrome.tabs.query({ active: true, currentWindow: true }, async function(tabs) {
//     const urls = ['https://example.com/page1', 'https://example.com/page2', 'https://example.com/page3'];

//     const fetchPromises = urls.map(async url => {
//         const result = await chrome.scripting.executeScript({
//             target: { tabId: tabs[0].id },
//             function: fetchPageContent,
//             args: [url]
//         });
//         return result[0].result;
//     });
//     const fetchedContents = await Promise.all(fetchPromises);
    
//        // Do something with the fetched contents
//        console.log(fetchedContents);
// });


// // // const urls = ['https://www.youtube.com/page1', 'https://www.upwork.com/page2', 'https://www.fiverr.com/page3'];

// // // const fetchPromises = urls.map(url => fetchPageContent(url));
// // // Promise.all(fetchPromises)
// // //     .then(contents => {
// // //         // Do something with the fetched contents
// // //         console.log(contents);
// // //     })
// // //     .catch(error => {
// // //         console.error('Error fetching contents:', error);
// // //     });


 


// // // const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
// // // // const targetUrl = 'https://www.coursera.org/';
// // // const targetUrl = 'https://www.youtube.com/page1';


// // // fetch(proxyUrl + targetUrl)
// // //     .then(response => response.text())
// // //     .then(data => {
// // //         console.log(data);
// // //     })
// // //     .catch(error => {
// // //         console.error('Error fetching data:', error);
// // //     });




// // // // 










// background.js

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "fetchData") {
        fetch(request.url, {
            method: request.method,
            headers: request.headers,
            credentials: "include" // Include cookies in the request
        })
        .then(response => response.json())
        .then(data => sendResponse(data))
        .catch(error => sendResponse({ error: error.message }));
        return true; // Indicates to keep the message channel open for async response
    }
});
