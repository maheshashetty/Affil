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

### Netlify Deployment

1. **Option A: Connect to GitHub (Recommended)**
   - Log in to [Netlify](https://app.netlify.com/).
   - Click **Add new site** > **Import from an existing project**.
   - Select your GitHub repository.
   - The settings in `netlify.toml` will automatically configure the build command and publish directory.
   - In **Environment variables**, add `GEMINI_API_KEY` with your key.

2. **Option B: Manual Drag & Drop**
   - Run `npm run build` locally.
   - Drag the `dist/` folder into the Netlify Drop area.

**Note:** The `netlify.toml` file handles the React Router redirection logic to ensure deep links (e.g., `/review/xyz`) work correctly on reload.

## 📜 License

Distributed under the Apache-2.0 License. See `LICENSE` for more information.

---
*Disclaimer: As an Amazon Associate I earn from qualifying purchases.*
