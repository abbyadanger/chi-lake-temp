// scrape.js - Browser-compatible scraping utilities

export async function scrapeData(url = 'https://forecast.weather.gov/product.php?issuedby=lot&product=omr&site=lot') {
  try {
    console.log(`Scraping: ${url}`);
    
    // Use CORS proxy to bypass CORS restrictions
    const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(url)}`;
    const response = await fetch(proxyUrl);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.text(); // corsproxy.io returns HTML directly
    
    // Parse HTML using DOMParser (browser API)
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'text/html');
    
    // Extract .glossaryProduct elements
    const elements = doc.querySelectorAll('.glossaryProduct');
    
    const elementData = Array.from(elements).map((element, index) => ({
      text: element.textContent?.trim() || ''
    }));
    
    return elementData;
    
  } catch (error) {
    console.error('Scraping error:', error);
    
    // Return demo data if scraping fails
    return [
      {
        text: `Scraping failed: ${error.message}`,
        className: 'error'
      }
    ];
  }
}