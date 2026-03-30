# Supabase Database Service

This project includes a simple service for inserting data into Supabase databases.

## Setup

1. **Install dependencies:**
   ```bash
   npm install @supabase/supabase-js
   ```

2. **Configure environment variables:**
   - Update the `.env.local` file with your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

3. **Create your database tables in Supabase**

## Usage

### Basic Insert

```javascript
import DatabaseService from './services/databaseService'

// Insert a single record
const { data, error } = await DatabaseService.insertRecord('users', {
  name: 'John Doe',
  email: 'john@example.com'
})

if (error) {
  console.error('Insert failed:', error)
} else {
  console.log('Insert successful:', data)
}
```

## File Structure

```
├── services/
│   └── databaseService.js   # Database service with Supabase config
├── pages/
│   └── index.js             # Demo page
└── .env.local               # Environment variables
```

## Database Configuration

Make sure your Supabase tables have the appropriate permissions:

1. **Row Level Security (RLS)**: Configure based on your authentication needs
2. **Column permissions**: Ensure the service account can write to required columns