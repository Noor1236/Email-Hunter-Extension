
// // document.addEventListener('DOMContentLoaded', function() {
// //     var element = document.getElementById('scrapeEmails');
// //     var clearElement = document.getElementById('clearEmails');
// //     var fetchEmailsButton = document.getElementById('fetchEmails'); // Fetch Emails button
// //     var urlInput = document.getElementById('urlInput'); // URL input field
// //     var list = document.getElementById('emailList');

// //     fetchEmailsButton.addEventListener('click', async function() {
// //         var enteredUrl = urlInput.value;

// //         if (enteredUrl) {
// //             var pageContent = await fetchPageContent(enteredUrl);

// //             if (pageContent) {
// //                 var extractedEmails = extractEmails(pageContent);
// //                 displayEmails(extractedEmails);
// //             }
// //         }
// //     });

// //     // element.addEventListener('click', async function() {
// //     //     var [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

// //     //     chrome.scripting.executeScript({
// //     //         target: { tabId: tab.id },
// //     //         function: scrapeEmailsFormPage,
// //     //     });
// //     // });

// //     element.addEventListener('click', async function () {
// //         try {
// //           const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
// //           chrome.scripting.executeScript({
// //             target: { tabId: tab.id },
// //             function: scrapeEmailsFromPage,
// //           });
// //         } catch (error) {
// //           console.error('Error querying active tab:', error);
// //         }
// //       });

// //     clearElement.addEventListener('click', function() {
// //         chrome.storage.local.remove('emails');
// //         list.innerHTML = '';
// //     });

// //     chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
// //         var emails = request.emails;

// //         list.innerHTML = ''; // Clear previous list items

// //         if (!emails || emails.length === 0) {
// //             var li = document.createElement('li');
// //             li.innerText = 'No emails found';
// //             list.appendChild(li);
// //         } else {
// //             emails.forEach((email) => {
// //                 var li = document.createElement('li');
// //                 var emailSpan = document.createElement('span');
// //                 var copyButton = document.createElement('button');

// //                 emailSpan.innerText = email;
// //                 copyButton.innerText = 'Copy';
// //                 copyButton.className = 'copy-button';

// //                 // Add click event to copy button
// //                 copyButton.addEventListener('click', function() {
// //                     copyToClipboard(email);
// //                 });

// //                 li.appendChild(emailSpan);
// //                 li.appendChild(copyButton);

// //                 list.appendChild(li);
// //             });

// //             // Store emails in chrome.storage.local
// //             chrome.storage.local.set({ 'emails': emails });
// //         }
// //     });

// //     // Load stored emails from chrome.storage.local
// //     chrome.storage.local.get('emails', function(result) {
// //         var storedEmails = result.emails;

// //         if (storedEmails) {
// //             storedEmails.forEach((email) => {
// //                 var li = document.createElement('li');
// //                 var emailSpan = document.createElement('span');
// //                 var copyButton = document.createElement('button');

// //                 emailSpan.innerText = email;
// //                 copyButton.innerText = 'Copy';
// //                 copyButton.className = 'copy-button';

// //                 // Add click event to copy button
// //                 copyButton.addEventListener('click', function() {
// //                     copyToClipboard(email);
// //                 });

// //                 li.appendChild(emailSpan);
// //                 li.appendChild(copyButton);

// //                 list.appendChild(li);
// //             });
// //         }
// //     });

// //     // function scrapeEmailsFormPage() {
// //     //     var emailRegEx = /[\w\.=-]+@+[\w\.-]+\.[\w]{2,3}/gim;
// //     //     var emails = document.body.innerHTML.match(emailRegEx);

// //     //     chrome.runtime.sendMessage({ emails });
// //     // }

// //     async function scrapeEmailsFromPage() {
// //         var emailRegEx = /[\w\.=-]+@+[\w\.-]+\.[\w]{2,3}/gim;
// //         var emails = document.body.innerHTML.match(emailRegEx);

// //         chrome.runtime.sendMessage({ emails });
// //     }

// //     element.addEventListener('click', async function () {
// //         try {
// //             const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
// //             chrome.scripting.executeScript({
// //                 target: { tabId: tab.id },
// //                 function: scrapeEmailsFromPage,
// //             });
// //         } catch (error) {
// //             console.error('Error querying active tab:', error);
// //         }
// //     });


// //     function copyToClipboard(text) {
// //         var tempInput = document.createElement('input');
// //         document.body.appendChild(tempInput);
// //         tempInput.value = text;
// //         tempInput.select();
// //         document.execCommand('copy');
// //         document.body.removeChild(tempInput);
// //     }

// //     // Implement your fetchPageContent and extractEmails functions here
// //     async function fetchPageContent(url) {
// //         try {
// //             const response = await fetch(url, {
// //                 mode: 'cors',
// //                 headers: {
// //                     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36'
// //                 }
// //             });
    
// //             if (!response.ok) {
// //                 throw new Error(`Failed to fetch page content. Response status: ${response.status}`);
// //             }
    
// //             return await response.text();
// //         } catch (error) {
// //             console.error('Error fetching page content:', error);
// //             return null;
// //         }
// //     }
    

// //   function extractEmails(content) {
// //       const emailRegEx = /[\w\.=-]+@+[\w\.-]+\.[\w]{2,3}/gim;
// //       const emails = content.match(emailRegEx) || [];
// //       return emails;
// //   }

// //   // Function to display emails on the popup UI
// //   function displayEmails(emails) {
// //       var list = document.getElementById('emailList');

// //       // Clear previous list items
// //       list.innerHTML = '';

// //       if (!emails || emails.length === 0) {
// //           var li = document.createElement('li');
// //           li.innerText = 'No emails found';
// //           list.appendChild(li);
// //       } else {
// //           emails.forEach((email) => {
// //               var li = document.createElement('li');
// //               var emailSpan = document.createElement('span');
// //               var copyButton = document.createElement('button');

// //               emailSpan.innerText = email;
// //               copyButton.innerText = 'Copy';
// //               copyButton.className = 'copy-button';

// //               // Add click event to copy button
// //               copyButton.addEventListener('click', function() {
// //                   copyToClipboard(email);
// //               });

// //               li.appendChild(emailSpan);
// //               li.appendChild(copyButton);

// //               list.appendChild(li);
// //           });

// //           // Store emails in chrome.storage.local
// //           chrome.storage.local.set({ 'emails': emails });
// //       }
// //   }

// // });


// // function fetchPageContent(url) {
// //     return fetch(url)
// //         .then(response => response.text())
// //         .catch(error => {
// //             console.error('Error fetching page content:', error);
// //             return null;
// //         });
// // }

// // chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
// //     if (request.action === 'fetchPageContent') {
// //         fetchPageContent(request.url)
// //             .then(content => {
// //                 sendResponse(content);
// //             });
// //         return true;
// //     }
// // });
///////////////////////



document.addEventListener('DOMContentLoaded', function() {
    const fetchEmailsButton = document.getElementById('fetchEmails');
    const urlsInput = document.getElementById('urlsInput');
    const emailList = document.getElementById('emailList');
  
    fetchEmailsButton.addEventListener('click', async function() {
        const enteredUrls = urlsInput.value.trim().split(',');
    
        emailList.innerHTML = ''; // Clear previous list items
    
        for (const url of enteredUrls) {
          const pageContent = await fetchPageContent(url.trim());
    
          if (pageContent) {
            const extractedEmails = extractEmails(pageContent);
            displayEmails(extractedEmails, emailList);
          }
        }
      });
  
      // Wait for all promises to complete before proceeding
     // await Promise.all(fetchPromises);
    });
    
    function fetchPageContent(url) {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const combinedUrl = proxyUrl + url;
    
        return fetch(combinedUrl)
          .then(response => response.text())
          .catch(error => {
            console.error('Error fetching page content:', error);
            return null;
          });
      }
    
    function fetchPageContent(url) {
      return fetch(url)
        .then(response => response.text())
        .catch(error => {
          console.error('Error fetching page content:', error);
          return null;
        });
    }
  
    function extractEmails(content) {
      const emailRegEx = /[\w\.=-]+@+[\w\.-]+\.[\w]{2,3}/gim;
      const emails = content.match(emailRegEx) || [];
      return emails;
    }
  
    function displayEmails(emails, listElement) {
      if (!emails || emails.length === 0) {
        const li = document.createElement('li');
        li.innerText = 'No emails found';
        listElement.appendChild(li);
      } else {
        emails.forEach(email => {
          const li = document.createElement('li');
          const emailSpan = document.createElement('span');
          const copyButton = document.createElement('button');
  
          emailSpan.innerText = email;
          copyButton.innerText = 'Copy';
          copyButton.className = 'copy-button';
  
          // Add click event to copy button
          copyButton.addEventListener('click', function() {
            copyToClipboard(email);
          });
  
          li.appendChild(emailSpan);
          li.appendChild(copyButton);
  
          listElement.appendChild(li);
        });
  
        // Store emails in chrome.storage.local
        chrome.storage.local.set({ 'emails': emails });
      }
    }
  
    function copyToClipboard(text) {
      const tempInput = document.createElement('input');
      document.body.appendChild(tempInput);
      tempInput.value = text;
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
    }
//   });
  








document.addEventListener('DOMContentLoaded', function() {
    var element = document.getElementById('scrapeEmails');
    var clearElement = document.getElementById('clearEmails');
    var fetchEmailsButton = document.getElementById('fetchEmails'); // Fetch Emails button
    var urlInput = document.getElementById('urlInput'); // URL input field
    var list = document.getElementById('emailList');
    // var fetchPageContent = document.getElementById('fetchPageContent

  
    fetchEmailsButton.addEventListener('click', async function() {
        var enteredUrls = urlsInput.value;

        if (enteredUrls) {
            var pageContent = await fetchPageContent(enteredUrls);

            if (pageContent) {
                var extractedEmails = extractEmails(pageContent);
                displayEmails(extractedEmails);
            }
        }
    });

   

    clearElement.addEventListener('click', function() {
        chrome.storage.local.remove('emails');
        list.innerHTML = '';
    });

    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        var emails = request.emails;

        list.innerHTML = ''; // Clear previous list items

        if (!emails || emails.length === 0) {
            var li = document.createElement('li');
            li.innerText = 'No emails found';
            list.appendChild(li);
        } else {
            emails.forEach((email) => {
                var li = document.createElement('li');
                var emailSpan = document.createElement('span');
                var copyButton = document.createElement('button');

                emailSpan.innerText = email;
                copyButton.innerText = 'Copy';
                copyButton.className = 'copy-button';

                // Add click event to copy button
                copyButton.addEventListener('click', function() {
                    copyToClipboard(email);
                });

                li.appendChild(emailSpan);
                li.appendChild(copyButton);

                list.appendChild(li);
            });

            // Store emails in chrome.storage.local
            chrome.storage.local.set({ 'emails': emails });
        }
    });

    // Load stored emails from chrome.storage.local
    chrome.storage.local.get('emails', function(result) {
        var storedEmails = result.emails;

        if (storedEmails) {
            storedEmails.forEach((email) => {
                var li = document.createElement('li');
                var emailSpan = document.createElement('span');
                var copyButton = document.createElement('button');

                emailSpan.innerText = email;
                copyButton.innerText = 'Copy';
                copyButton.className = 'copy-button';

                // Add click event to copy button
                copyButton.addEventListener('click', function() {
                    copyToClipboard(email);
                });

                li.appendChild(emailSpan);
                li.appendChild(copyButton);

                list.appendChild(li);
            });
        }
    });

    // Your existing functions: scrapeEmailsFromPage, copyToClipboard, fetchPageContent, extractEmails, and displayEmails


    async function scrapeEmailsFromPage() {
                var emailRegEx = /[\w\.=-]+@+[\w\.-]+\.[\w]{2,3}/gim;
                var emails = document.body.innerHTML.match(emailRegEx);
        
                chrome.runtime.sendMessage({ emails });
            }
        
            element.addEventListener('click', async function () {
                try {
                    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
                    chrome.scripting.executeScript({
                        target: { tabId: tab.id },
                        function: scrapeEmailsFromPage,
                    });
                } catch (error) {
                    console.error('Error querying active tab:', error);
                }
            });
        
        
            function copyToClipboard(text) {
                var tempInput = document.createElement('input');
                document.body.appendChild(tempInput);
                tempInput.value = text;
                tempInput.select();
                document.execCommand('copy');
                document.body.removeChild(tempInput);
            }
        
            // Implement your fetchPageContent and extractEmails functions here
            async function fetchPageContent(url) {
                try {
                    const response = await fetch(url, {
                        mode: 'cors',
                        headers: {
                            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36'
                        }
                    });
            
                    if (!response.ok) {
                        throw new Error(`Failed to fetch page content. Response status: ${response.status}`);
                    }
            
                    const content = await response.text();
                    return content;
                } catch (error) {
                    console.error('Error fetching page content:', error.message);
                    return null; // Return null to indicate failure
                }
            }
            
            
        
          function extractEmails(content) {
              const emailRegEx = /[\w\.=-]+@+[\w\.-]+\.[\w]{2,3}/gim;
              const emails = content.match(emailRegEx) || [];
              return emails;
          }
        
          // Function to display emails on the popup UI
          function displayEmails(emails) {
              var list = document.getElementById('emailList');
        
              // Clear previous list items
              list.innerHTML = '';
        
              if (!emails || emails.length === 0) {
                  var li = document.createElement('li');
                  li.innerText = 'No emails found';
                  list.appendChild(li);
              } else {
                  emails.forEach((email) => {
                      var li = document.createElement('li');
                      var emailSpan = document.createElement('span');
                      var copyButton = document.createElement('button');
        
                      emailSpan.innerText = email;
                      copyButton.innerText = 'Copy';
                      copyButton.className = 'copy-button';
        
                      // Add click event to copy button
                      copyButton.addEventListener('click', function() {
                          copyToClipboard(email);
                      });
        
                      li.appendChild(emailSpan);
                      li.appendChild(copyButton);
        
                      list.appendChild(li);
                  });
        
                  // Store emails in chrome.storage.local
                  chrome.storage.local.set({ 'emails': emails });
              }
          }
        
        });
        
        
        function fetchPageContent(url) {
            return fetch(url)
                .then(response => response.text())
                .catch(error => {
                    console.error('Error fetching page content:', error);
                    return null;
                });
        }
        
        chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
            if (request.action === 'fetchPageContent') {
                fetchPageContent(request.url)
                    .then(content => {
                        sendResponse(content);
                    });
                return true;
            }
        });






