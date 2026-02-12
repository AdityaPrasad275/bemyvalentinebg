/**
 * Google Apps Script for Valentine's Day Waitlist
 * 
 * SETUP INSTRUCTIONS:
 * 
 * 1. Create a new Google Sheet
 *    - Name it "Valentine Waitlist" or whatever
 *    - Add headers in Row 1: Email | Gender | Seeking | Age | Timestamp
 * 
 * 2. Open Script Editor
 *    - In your Google Sheet: Extensions > Apps Script
 *    - Delete any existing code
 *    - Paste this entire script
 * 
 * 3. Deploy as Web App
 *    - Click "Deploy" > "New deployment"
 *    - Click gear icon > Select "Web app"
 *    - Description: "Valentine Waitlist API"
 *    - Execute as: Me
 *    - Who has access: Anyone
 *    - Click "Deploy"
 *    - Copy the Web App URL
 * 
 * 4. Update your HTML
 *    - Find the line: const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
 *    - Replace with your actual Web App URL
 * 
 * 5. Test it
 *    - Fill out your form
 *    - Check your Google Sheet for new row
 */

function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Add a new row with the form data
    sheet.appendRow([
      data.email,
      data.gender,
      data.seeking,
      data.age,
      data.timestamp
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: Handle GET requests (for testing)
function doGet(e) {
  return ContentService
    .createTextOutput('Valentine Waitlist API is running!')
    .setMimeType(ContentService.MimeType.TEXT);
}
