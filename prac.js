const fetch = require('node-fetch'); // Install this library using: npm install node-fetch
const cheerio = require('cheerio');   // Install this library using: npm install cheerio

async function extractEmailsFromUrl(url) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    
    const $ = cheerio.load(html);
    const text = $('body').text(); // Extract text content from the page
    
    const emailRegex = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/g;
    const emails = text.match(emailRegex) || [];
    
    return emails;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

const urls = [
  "https://www.upwork.com/page1",
  "https://www.youtube.com/page2",
  // Add more URLs here
];

(async () => {
  for (const url of urls) {
    const emails = await extractEmailsFromUrl(url);
    console.log(`Emails from ${url}:`, emails);
  }
})();
