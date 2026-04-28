# Aureus Partners — Website

Clean, minimal website for Aureus Partners built for GitHub Pages.

---

## Repository Structure

```
aureus-partners/
├── index.html          ← All page content (text, sections, nav)
├── css/
│   └── style.css       ← All visual styles (colors, fonts, layout)
├── js/
│   └── main.js         ← Interactivity (nav scroll, animations, form)
└── images/             ← Add your photos here (create this folder)
```

---

## Deploying to GitHub Pages

1. Create a new GitHub repository (e.g. `aureuspartners`)
2. Upload all files, keeping the folder structure intact
3. Go to **Settings → Pages**
4. Under "Branch", select `main` and folder `/root`
5. Click **Save** — your site will be live at:
   `https://yourusername.github.io/aureuspartners`

For a custom domain (e.g. `aureuspartners.us`):
1. Go to **Settings → Pages → Custom domain**
2. Enter your domain and save
3. Add a `CNAME` file to the repo root containing just your domain name
4. Update your DNS with your registrar (add a CNAME record pointing to `yourusername.github.io`)

---

## Common Edits

### Change a nav link
Open `index.html` and find the `<nav>` section near the top.

### Edit the hero headline
Open `index.html` and find the `<!-- HERO -->` comment block.

### Add or remove a service card
Open `index.html` and find the `<!-- SERVICES -->` comment block.  
Copy/paste a `<div class="what-card">` block to add one.

### Change colors
Open `css/style.css` and edit the `:root` block at the top.  
`--gold` and `--gold2` control the accent color throughout.

### Change the contact email
Open `index.html`, find the `<!-- CONTACT -->` block, and update:
```html
<a href="mailto:info@aureuspartners.us" ...>info@aureuspartners.us</a>
```

### Add a real founder photo
1. Add your photo to an `images/` folder (e.g. `images/ted-andrews.jpg`)
2. In `index.html`, find the `<div class="founder-img-area">` block
3. Replace the `<div class="founder-img-monogram">TA</div>` line with:
```html
<img src="images/ted-andrews.jpg" alt="Ted Andrews"
     style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:top;">
```

### Connect the contact form to a real backend
The easiest option is [Formspree](https://formspree.io):
1. Sign up and create a form to get your endpoint ID
2. In `index.html`, update the form tag:
   ```html
   <form id="contact-form" action="https://formspree.io/f/YOUR_ID" method="POST">
   ```
3. In `js/main.js`, remove the submit event listener — Formspree handles it natively.

---

## Fonts

The site uses two Google Fonts loaded in `index.html`:
- **Playfair Display** — headings (serif, elegant)
- **Instrument Sans** — body text (clean, modern)

These load from Google's CDN automatically — no installation needed.
