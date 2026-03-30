import DatabaseService from '../services/databaseService'

export default function Home() {
  const handleButtonClick = async () => {
    const dbService = new DatabaseService()
    const date = "2024-06-01"
    const temperature = 69
    
    await dbService.addDateAndTempToDatabase(date, temperature)
  }

  return (
    <div>
      <button onClick={handleButtonClick}>
        Add Date and Temp to Database
      </button>
    </div>
  )
}