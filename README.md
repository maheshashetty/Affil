# BestPicksHub 🚀

**BestPicksHub** is a high-conversion Amazon affiliate platform built with React, Vite, and Tailwind CSS. It features expert-tested product reviews, curated buying guides, and a performance dashboard.

## ✨ Features

- 🎯 **Curated Product Reviews:** Detailed long-form reviews with pros, cons, and scores.
- 📱 **Mobile-First Design:** Optimized for conversion with sticky CTAs and responsive layouts.
- 🔥 **Deals Tracker:** Highlight seasonal discounts with an urgency-driven UI.
- 📊 **Performance Dashboard:** Visual representation of clicks and conversion rates (Admin).
- ⚖️ **Legal Compliance:** Built-in FTC disclosures and editorial policies.
- 🚀 **Turbo Performance:** Built with Vite for near-instant load times.

## 🛠️ Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS 4
- **Routing:** React Router 7
- **Animations:** Motion (Framer Motion)
- **Charts:** Recharts
- **Icons:** Lucide React

## 🚀 Getting Started

### Local Development

1. **Clone the repository** (after exporting from AI Studio).
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up Environment Variables:**
   Create a `.env` file based on `.env.example` and add your `GEMINI_API_KEY`.
4. **Run the development server:**
   ```bash
   npm run dev
   ```

### Deployment

This project is configured to deploy to **GitHub Pages** automatically via GitHub Actions.

1. Export this project to a new GitHub repository using the **"Export to GitHub"** button in Google AI Studio.
2. In your GitHub repository settings:
   - Go to **Settings > Pages**.
   - Under **Build and deployment > Source**, select **GitHub Actions**.
3. Push your changes to the `main` branch, and the site will deploy automatically!

**Note:** If your site is hosted at `username.github.io/repo-name/`, you may need to update the `base` property in `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/repo-name/',
  // ... rest of config
})
```

## 📜 License

Distributed under the Apache-2.0 License. See `LICENSE` for more information.

---
*Disclaimer: As an Amazon Associate I earn from qualifying purchases.*
