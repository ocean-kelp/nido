# Nido

> Lightweight home organizer — track bills, household supplies, and daily finances from your phone.

Nido is a simple, offline-first mobile app designed to help you stay on top of your home. Track recurring bills before they're due, get notified when household supplies are running low, and keep a clear picture of your monthly finances — all from your phone, no account required.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React Native + Expo |
| Routing | Expo Router (file-based) |
| Language | TypeScript |
| Local database | Expo SQLite |
| State management | Zustand |
| Notifications | Expo Notifications (local) |
| Package manager | Yarn |

---

## Project Structure

```
nido/
├── app/                        # Routes and layouts (Expo Router)
│   ├── _layout.tsx
│   ├── index.tsx
│   └── (tabs)/
│       ├── payments/
│       ├── resources/
│       └── finances/
├── src/
│   ├── components/             # Reusable UI components
│   ├── hooks/                  # Custom React hooks
│   ├── services/               # Database and notification logic
│   ├── stores/                 # Global state (Zustand)
│   ├── utils/                  # Helper functions
│   ├── constants/              # Colors, sizes, strings
│   └── types/                  # Global TypeScript types
├── docs/                       # Project documentation
│   ├── architecture/
│   ├── requirements/
│   │   ├── functional/
│   │   └── non-functional/
│   └── decisions/
└── assets/                     # Images, fonts, icons
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- Yarn
- Expo Go app on your phone (for local testing)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/nido.git
cd nido

# Install dependencies
yarn install

# Start the development server
yarn start
```

Then scan the QR code with Expo Go on your phone.

---

## Roadmap

- [x] Project setup
- [ ] Bill reminders with local notifications
- [ ] Household resource tracking
- [ ] Finance overview
- [ ] Android release (Google Play Store)

---

## License

Source available — all commercial rights reserved by the author.
You are free to view and fork this project for personal, non-commercial use only.
Any commercial use, redistribution, or monetization requires explicit written permission from the author.

---

Made with ❤️ by [xingshuu](https://github.com/xingshuu)
