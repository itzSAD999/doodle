const cheerio = require('cheerio');
const fs = require('fs');

async function scrapeBlogs() {
  try {
    const response = await fetch('https://www.doodleblue.com/blogs');
    const html = await response.text();
    const $ = cheerio.load(html);
    
    let nuxtDataStr = '';
    $('script').each((i, el) => {
      const text = $(el).html();
      if (text && text.includes('window.__NUXT__')) {
        nuxtDataStr = text;
      }
    });

    if (nuxtDataStr) {
      fs.writeFileSync('nuxt_data.js', nuxtDataStr);
      console.log('Saved nuxt_data.js');
    } else {
      console.log('Could not find window.__NUXT__');
    }
  } catch (error) {
    console.error('Error scraping blogs:', error.message);
  }
}

scrapeBlogs();
