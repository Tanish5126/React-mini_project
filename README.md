# Profile Card Generator

A React app that lets you build a live-preview professional profile card by filling in a form. Supports dark mode and is fully responsive.

---

## Features

- **Live preview** — the card updates in real time as you type
- **Dark mode** — toggle between light and dark themes from the navbar
- **Tag-based inputs** — add and remove skills and projects as chips
- **Responsive layout** — two-column on desktop, stacked on mobile

---

## Tech Stack

- React (with Hooks)
- Plain CSS (CSS variables for theming)

---

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

```bash
git clone https://github.com/your-username/profile-card-generator.git
cd profile-card-generator
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Project Structure

```
src/
├── App.jsx              # Root component — form state & layout
├── App.css              # Global styles & CSS variable theming
└── components/
    └── ProfileCard.jsx  # Stateless card component
```

---

## How It Works

`App.jsx` holds all the form state and passes it down as props to `ProfileCard.jsx`. The card component is purely presentational — it renders whatever data it receives, making it easy to reuse or export independently.

**Form fields:**
- Full Name, Role / Title, Email, Location
- Education, Work Experience (textarea)
- Projects & Skills (tag inputs — press Enter or click Add)

---

## Customization

All colors and theme values are defined as CSS variables on `.app` and `.app.dark` in `App.css`. To change the accent color, avatar palette, or chip styles, update those variables.

---

## License

MIT
