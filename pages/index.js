import DatabaseService from '../services/databaseService'
import { scrapeData } from '../services/scrape'
import { useState } from 'react'

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleButtonClick = async () => {
    const dbService = new DatabaseService()
    const date = "2024-06-01"
    const temperature = 69
    
    await dbService.addDateAndTempToDatabase(date, temperature)
  }

  const handleScrapeClick = async () => {
    setLoading(true);
    try {
      console.log('Starting browser-based scraping...');
      const scrapedData = await scrapeData();
      setData(scrapedData);
      console.log('Scraping completed successfully!');
    } catch (error) {
      console.error('Scraping failed:', error);
      alert('Scraping failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={handleButtonClick}>
        Add Date and Temp to Database
      </button>
      
      <br /><br />
      
      <button onClick={handleScrapeClick}>
        Scrape
      </button>
      
      <div style={{ marginTop: '20px' }}>
        <h3>Scraped Data ({data.length}):</h3>

        {data.map((item, index) => (
          <div key={index}>
            <p>"{item.text}"</p>
          </div>
        ))}

      </div>
    </div>
  )
}