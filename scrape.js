import * as fs from 'fs';
import * as path from 'path';
import * as cheerio from 'cheerio';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseURL = 'https://www.doodleblue.com/services';

const servicesToScrape = [
  {
    id: 'dt',
    slug: 'digitaltransformation',
    items: [
      'technology-ecosystem-audit',
      'digital-strategy',
      'digital-marketing',
      'digital-analytics'
    ]
  },
  {
    id: 'uiux',
    slug: 'ui-ux',
    items: [
      'branding',
      'ux-strategy',
      'mobile-web-design'
    ]
  },
  {
    id: 'mobile',
    slug: 'mobile-engineering',
    items: [
      'android-development',
      'ios-development',
      'react-native-development',
      'wearable-development',
      'hybrid-development'
    ]
  },
  {
    id: 'web',
    slug: 'web-technology',
    items: [
      'content-management-systems',
      'e-commerce-platforms',
      'custom-web-applications'
    ]
  },
  {
    id: 'innovation',
    slug: 'innovation-technology',
    items: [
      'augmented-virtual-reality',
      'machine-learning-ai',
      'internet-of-things',
      'blockchain',
      'cyber-security'
    ]
  },
  {
    id: 'enterprise',
    slug: 'enterprise-app-development',
    items: [
      'enterprise-resource-planning',
      'point-of-sale',
      'customer-relation-management',
      'data-workflow-automation',
      'business-intelligence'
    ]
  },
  {
    id: 'perf',
    slug: 'performance-engineering',
    items: [
      'quality-assurance-as-a-service',
      'cloud-architecture-optimization'
    ]
  }
];

async function delay(ms) {
  return new Promise(res => setTimeout(res, ms));
}

async function scrapeSubservice(serviceSlug, subSlug) {
  const url = `${baseURL}/${serviceSlug}/${subSlug}/`;
  console.log(`Fetching: ${url}`);
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.warn(`Failed to fetch ${url}: ${res.status}`);
      return null;
    }
    const html = await res.text();
    const $ = cheerio.load(html);

    // Try JSON-LD first
    let name = '';
    let description = '';
    const scriptTag = $('script[type="application/ld+json"]').first();
    if (scriptTag.length) {
      try {
        const json = JSON.parse(scriptTag.html());
        name = json.name || '';
        description = json.description || '';
      } catch (e) {
        console.warn('Error parsing JSON-LD:', e);
      }
    }

    // Fallback to meta tags if JSON-LD is missing
    if (!description) {
      description = $('meta[name="description"]').attr('content') || '';
    }
    if (!name) {
      name = $('meta[property="og:title"]').attr('content') || $('title').text() || subSlug;
      // remove suffix
      name = name.split('|')[0].trim();
    }

    return {
      title: name,
      slug: subSlug,
      description: description,
      heroTitle: name.toUpperCase(),
      heroDesc: description
    };
  } catch (error) {
    console.error(`Error scraping ${url}:`, error.message);
    return null;
  }
}

async function run() {
  const results = {};
  for (const category of servicesToScrape) {
    results[category.id] = {};
    for (const subSlug of category.items) {
      const data = await scrapeSubservice(category.slug, subSlug);
      results[category.id][subSlug] = data;
      await delay(500); // Be nice to the server
    }
  }

  const outPath = path.join(__dirname, 'scraped_services.json');
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2));
  console.log(`Saved results to ${outPath}`);
}

run();
