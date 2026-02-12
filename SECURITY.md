# Security & Legal Checklist

## ✅ What You're Already Doing Right

- **No password storage** - Using magic links (email-based login)
- **No chat storage** - WebRTC peer-to-peer, messages never hit your server
- **No profile hosting** - Not storing photos or bios
- **Minimal data collection** - Just email, age, gender, preferences
- **Private storage** - Google Sheets is private, only you can access
- **Static site** - Just HTML, no server to hack

## 🔒 Security Measures Added

### Waitlist Protection
- ✅ Email validation (checks for @ and .)
- ✅ Age validation (must be 18-99)
- ✅ Rate limiting (60 second cooldown between submissions)
- ✅ 18+ confirmation checkbox
- ✅ Privacy policy in footer

### Google Account Security
**DO THIS NOW:**
1. Enable 2FA on your Google account (the one with the Sheet)
2. Don't share the Google Sheet link publicly
3. Don't screenshot the sheet with emails visible

### Apps Script Security
**Current state:**
- ✅ Script only accepts POST requests (writes data)
- ✅ No GET endpoint that returns user data
- ✅ Deployed as "Execute as: Me" (runs under your permissions)
- ✅ "Anyone" can access (needed for form to work)

**Risks:**
- Someone could spam fake entries → You can manually delete them
- Someone could flood the sheet → Google has rate limits built-in
- No major security holes

## 📋 Legal Protections Added

### Disclaimers in the Site
- ✅ Privacy statement (footer)
- ✅ "Experimental event, not a dating service" (checkbox)
- ✅ 18+ age confirmation
- ✅ Clear explanation of what data is collected

### What You Should Also Have

**Create a simple email template for deletion requests:**
```
Subject: Data Deletion Request

Hi,

Your email has been removed from our waitlist.

We only stored: your email, age, gender, and preferences.
This data has now been deleted.

Thanks,
Valentine Team
```

## 🚨 For the Actual Event (Feb 13)

### Must-Have Features
- [ ] Report/Block button in the chat
- [ ] Instant unmatch functionality
- [ ] Instructions on what to do if harassed ("Report, block, email us")
- [ ] TURN server for IP privacy (or accept that IPs are visible)

### Recommended Disclaimers (Add to event login page)
```
By joining this event, you acknowledge:
- This is an experimental, one-time event
- We don't moderate conversations in real-time
- We don't store your chats
- You're responsible for your own safety
- Report any harassment to [your email]
- Don't share personal info unless you're comfortable
```

## 🎯 Spam/Abuse Prevention

### On Waitlist (Current)
- ✅ 60-second rate limit per browser
- Manual review option: Before Feb 13, review the Google Sheet and delete obvious fakes

### On Event Day
- Use unique tokens in login links (prevents sharing links)
- One email = one login (prevent multi-accounting)
- If someone reports another user, manually boot them from the event

## 📊 Data You're Collecting

### Waitlist Phase
```
Email      → To send login link
Gender     → For matching algorithm
Seeking    → For matching algorithm
Age        → Legal compliance (18+) + matching
Timestamp  → To track signup time
```

### Event Phase (Feb 13)
```
NOTHING STORED
- Matching happens in-memory
- Chats are peer-to-peer
- No logs, no database
```

## ⚖️ Legal Liability (Real Talk)

**You're probably fine because:**
1. You're not a registered business
2. You're not charging money
3. You're not storing sensitive data
4. You're explicit about what this is (experimental event)
5. You're in India (less strict than EU/US for small projects)

**Could someone sue you?**
- Technically, anyone can sue anyone
- Realistically, for a free one-time event? Very unlikely

**Could you get in trouble with authorities?**
- You're not breaking any laws
- You're not facilitating anything illegal
- You're just connecting people to chat

**Worst realistic scenario:**
- Someone gets harassed → You didn't store chats, can't help investigate
- Someone complains about privacy → You delete their data, end of story
- Google shuts down your Apps Script → You lose the waitlist (backup the sheet)

## 🛡️ Best Practices Going Forward

1. **Backup your Google Sheet** (File > Download as CSV)
2. **Don't use your personal email publicly** (create valentine.blr@gmail.com or similar)
3. **If this blows up**, add reCAPTCHA to prevent bots
4. **After Feb 13**, delete all data unless you're making this recurring

## 🚀 You're Good To Launch

**Current risk level: LOW**

You're doing this smarter than 90% of actual dating apps:
- No persistent user accounts
- No stored messages
- No payment processing
- No photo hosting
- Clear privacy policy

The only data you have is emails in a private Google Sheet. Even if that leaked, it's just "people who signed up for a speed dating event" - not exactly scandalous.

**Go post on Reddit. You're covered.**

---

## Questions to Ask Yourself Later

If this becomes a regular thing:
- Do I need Terms of Service? (Yes, if recurring)
- Do I need to register as a business? (Probably not unless you charge)
- Do I need insurance? (Lol no, you're not a company)
- Should I get a lawyer? (Only if you're making money from this)

For a one-time free experiment? You're totally fine.
