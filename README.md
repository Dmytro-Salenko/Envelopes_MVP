# ✉️ Envelo.love — Personalized Envelope Templates

Create elegant, print-ready envelopes for weddings, events, and personal occasions. Upload your address list, customize your layout, and download a professional PDF — ready to print at home or send to a print shop.

## 🌐 Live Demo

**→ https://envelo.love**

---

## ✨ Features

- 🔍 Minimalist, timeless envelope designs  
- 📄 Upload CSV files with addresses (mail merge support)  
- 🎨 Customization via [PitchPrint Editor](https://pitchprint.com)  
- 📅 Export high-quality 7×5 inch PDFs  
- 🎥 Embedded YouTube tutorial for easy onboarding  
- ✉️ Print at home or forward to any print shop  
- 🌍 SEO-optimized (metadata + dynamic sitemap)  
- 📈 GitHub Actions support for sitemap auto-generation  

---

## 🛠️ Tech Stack

- HTML5 + Tailwind CSS  
- Vanilla JavaScript  
- PitchPrint API (JS client)  
- GitHub Pages / Vercel deployment  
- Node.js (for sitemap generation)  
- GitHub Actions (CI automation)  

---

## 📂 Project Structure
/
├── index.html              # Main landing page and template catalog
├── template.html           # Template editor view with PitchPrint integration
├── how-to-print.html       # SEO-focused printing guide
├── templates.js            # Template definitions with image + metadata
├── generate-sitemap.js     # Node script to generate sitemap.xml
├── sitemap.xml             # Auto-generated via GitHub Action
├── images/                 # Template preview thumbnails
└── .github/workflows/
└── sitemap.yml         # Action to auto-update sitemap on push
---

## 🚀 Getting Started Locally

```bash
git clone https://github.com/yourname/Envelopes_MVP.git
cd Envelopes_MVP
npm install
node generate-sitemap.js
Then open index.html in your browser, or run:
npx serve .
🧹 Sitemap Auto-Update

This project uses GitHub Actions to automatically update sitemap.xml on every push to main, based on templates.js. No manual work needed.

⸻

🌟 Promotion & SEO
	•	Use how-to-print.html as a landing page for Pinterest/Reddit posts
	•	Share template pages with UTM parameters for analytics
	•	Pinterest-ready graphics created and hosted for each template
	•	Meta tags and OpenGraph structured for rich previews

⸻

📧 Contact

Built with ❤️ by Dmytro Salenko

⸻

🔖 License

MIT License — free to use for personal projects.
