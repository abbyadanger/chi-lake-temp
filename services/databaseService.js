import { createClient } from '@supabase/supabase-js'

export class DatabaseService {
  constructor() {
    /* Configure Supabase client */
    const supabaseUrl = 'https://nofpllfekouldgxgyunu.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5vZnBsbGZla291bGRneGd5dW51Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI4NzcwNDQsImV4cCI6MjA3ODQ1MzA0NH0.KfmYheXhjnG7Q9OWC6PiAr8IW38VlXRCXJnpQJIV1AM';
    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  /* Method to add a date & temp to the database */
  async addDateAndTempToDatabase(date, temp) {
    await this.supabase
      .from('lake-mich-temp')
      .insert([{ date, temp }]);
  }
}

export default DatabaseService