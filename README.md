# Nisha Global ⚽🏈🏀⚾🏒

**One World • One Passion • All Sports**
🤝 No Debate • Respect Every Sports Fan Worldwide ❤️

Official website of **Nisha Global**: daily sports news, match fixtures, legend stories, product reviews and collabs for Soccer, NFL, NBA, MLB & NHL.

- 📺 YouTube: https://www.youtube.com/@Nisha.global
- 📱 TikTok: https://www.tiktok.com/@nisha.global

## Website sections
- **Latest News**: headlines with sport filters and search
- **Fixtures**: upcoming games grouped by day; past games hide automatically
- **Legends**: stories of the all-time greats
- **Product Reviews**: ratings, pros & cons
- **Collabs & Promotions**: offers for brands and an enquiry form
- Subscribe/Follow buttons everywhere, plus a sticky bar on phones

## How to update the site
All content lives in **`content.js`**, so you never need to touch the code.

1. Open `content.js` (on GitHub, click the file and then the ✏️ pencil icon).
2. Find the list you want: `UPDATES` (news), `FIXTURES`, `LEGENDS`, `REVIEWS`, `COLLABS` or `VIDEOS`.
3. Copy an existing entry `{ ... },` and paste it at the **top** of the list.
4. Change the text. Dates use the format `"YYYY-MM-DD"`.
5. Click **Commit changes**. The live site updates within a minute or two.

**Example news entry:**
```js
{
  title: "Your headline",
  category: "Soccer",          // Soccer | NFL | NBA | MLB | NHL
  date: "2026-11-20",
  summary: "One-line teaser shown on the card.",
  body: "Full story.\n\nBlank line = new paragraph.",
  source: "https://link-to-source",
  video: "https://www.youtube.com/watch?v=..."   // optional
},
```

**Show your YouTube videos:** add video IDs to `VIDEOS`. The ID is the part after `watch?v=` or `/shorts/`.

## Files
| File | What it is |
|---|---|
| `index.html` | The website page (layout & design) |
| `content.js` | All the text: news, fixtures, legends, reviews, collabs, links |
| `assets/logo.webp` | Nisha Global logo |

## Hosting
🌐 Live at **https://nisha-global.web.app** (Firebase Hosting, project `nisha-global`).

To publish changes after editing `content.js`, run this in the project folder:
```
firebase deploy --only hosting
```
If sign-in or deploy fails with a certificate error, run this once first in the same terminal (PowerShell):
```
$env:NODE_OPTIONS = '--use-system-ca'
```
