# Be My Valentine

A sleek, modern waitlist landing page for Valentine's Day speed dating events. Built with vanilla HTML/CSS/JavaScript and powered by Google Sheets.

## Features

- 🎨 **Modern UI** - Clean, responsive design with smooth animations
- 📊 **Easy Data Collection** - Form submissions automatically saved to Google Sheets
- ⚡ **Lightweight** - No dependencies, pure vanilla stack
- 🚀 **Simple Deployment** - Deploy to Vercel, Netlify, or GitHub Pages in minutes
- 📱 **Mobile Responsive** - Optimized for all screen sizes

## What's Included

- **waitlist.html** - Complete landing page with embedded form
- **google-apps-script.js** - Backend handler for collecting form submissions
- **SECURITY.md** - Security considerations and best practices

## Quick Start

### 1. Set Up Google Sheets Backend

1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet
2. Name it "Valentine Waitlist" (or your preferred name)
3. In the first row, add these headers:
   ```
   Email | Gender | Seeking | Age | Timestamp
   ```

### 2. Deploy Google Apps Script

1. In your sheet, go to **Extensions > Apps Script**
2. Clear any existing code and paste the contents of `google-apps-script.js`
3. Click **Save**
4. Click **Deploy** → **New deployment** → Select type gear icon → **Web app**
5. Configure:
   - **Description**: Valentine Waitlist API
   - **Execute as**: Your account
   - **Who has access**: Anyone
6. Click **Deploy** and authorize if prompted
7. Copy the Web App URL (you'll need this next)

### 3. Connect Your Form

1. Open `waitlist.html`
2. Find the line: `const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';`
3. Replace it with your Google Apps Script URL from Step 2

### 4. Deploy and Share

Choose your hosting platform:

**Vercel** (Recommended)
```bash
npm i -g vercel
vercel
```

**Netlify**
- Drag and drop `waitlist.html` to [netlify.com](https://netlify.com)

**GitHub Pages**
- Create repo, upload as `index.html`, enable Pages in settings

## Configuration

Edit the form fields and styling by modifying `waitlist.html`:
- **Form fields**: Look for the form section around line 100
- **Colors**: CSS variables defined in `:root` (red, black, white, gray)
- **Font**: Using Bebas Neue and Instrument Sans from Google Fonts

## Security

See [SECURITY.md](SECURITY.md) for important security considerations before deploying.

## License

MIT

## Marketing Tips

Once it's live:
1. Post on r/bangalore
2. Share in Bangalore WhatsApp groups
3. Instagram story with countdown
4. "Tag a single friend" mechanics

## Next Steps

If you get 50+ signups today:
- Build the actual matching app
- I can help with the WebRTC/matching server
- We do this thing for real on Feb 13!

---

Made with ❤️ in Bangalore
