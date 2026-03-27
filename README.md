# PAM Rwanda - Frontend

Professional Pan-Africanism Movement Platform Frontend built with React, Vite, and Tailwind CSS.

## 🎨 Design

- **Colors**: Blue (#3b82f6), Red (#ef4444), White (#ffffff)
- **Responsive**: Mobile-first design
- **Modern UI**: Professional and clean interface
- **Accessible**: WCAG compliant

## 🚀 Features

- **User Auth**: Register, Login, Profile
- **Events**: Browse and filter events
- **Learning Path**: Complete 4 sessions to become member
- **Testimonies**: Share community stories
- **African History**: Explore continent history
- **Pan-African Heroes**: Learn from great leaders
- **Opportunities**: Jobs, scholarships, startups
- **Real-time Chat**: Community discussion
- **Dashboard**: Track your progress

## 📋 Prerequisites

- Node.js v16+
- npm or yarn
- Backend API running (port 5000)

## 🔧 Installation

1. **Navigate to directory**
   ```bash
   cd PAM-Rwanda
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Verify API URL** in `src/services/api.js`:
   ```js
   const API_BASE_URL = 'http://localhost:5000/api';
   ```

## 🚀 Running

**Development**:
```bash
npm run dev
```
Opens at http://localhost:5173

**Build**:
```bash
npm run build
```

**Preview Build**:
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── HeroSection.jsx
│   ├── EventCard.jsx
│   ├── TestimonyCard.jsx
│   ├── HistoryCard.jsx
│   ├── OpportunityCard.jsx
│   └── PanafricanistCard.jsx
├── pages/              # Page components
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Events.jsx
│   ├── History.jsx
│   ├── Panafricanists.jsx
│   ├── Opportunities.jsx
│   ├── Testimonies.jsx
│   └── Dashboard.jsx
├── services/           # API & Socket.io
│   ├── api.js
│   └── socket.js
├── store/             # Zustand state
│   └── store.js
├── App.jsx            # Main app
├── main.jsx           # Vite entry
└── index.css          # Tailwind styles
```

## 🎨 Tailwind Colors

- **Primary**: Blue (#3b82f6)
- **Accent**: Red (#ef4444)
- **Neutral**: White & Grayscale

Usage:
```jsx
<button className="bg-primary-500 text-white">Primary</button>
<button className="bg-accent-500 text-white">Accent</button>
```

## 🔐 Authentication

### Login
- Email: `admin@pam.africa`
- Password: `admin123`

### Token Storage
- Stored in localStorage
- Auto-sent with API requests
- Cleared on logout

### Registration
New users register with:
- First Name, Last Name, Email, Password, Country

## 🎓 Membership

Become member by:
1. Completing 4 learning sessions
2. Passing quizzes
3. Getting verified badge
4. Unlocking member features

## 📊 State Management

Zustand stores:
- `useAuthStore` - User auth
- `useEventStore` - Events
- `useSessionStore` - Sessions
- `useChatStore` - Chat

## 🌐 API Integration

```jsx
import { eventService } from '../services/api';

// Get events
const events = await eventService.getEvents();

// Create event
await eventService.createEvent({ title: '...', date: '...' });
```

## 💬 Real-time Chat

```jsx
import { subscribeToChat, sendChatMessage } from '../services/socket';

// Listen
subscribeToChat('general', null, (msg) => console.log(msg));

// Send
sendChatMessage({ content: 'Hi', chatType: 'general' });
```

## 📱 Responsive

- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns

## 🔄 Environment

Optional `.env.local`:
```
VITE_API_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5000
```

## 🐛 Troubleshooting

**API Connection Failed**
- Backend running? Port 5000?
- Check API URL in `src/services/api.js`
- Backend CORS configured?

**Login Issues**
- Clear localStorage
- Check console for errors
- Verify backend is running

**Chat Not Working**
- Socket.io initialized?
- WebSocket support enabled?
- Check DevTools Network tab

## 📚 Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- Zustand (State)
- Axios (HTTP)
- Socket.io Client
- React Router 7

## 📄 License

MIT @ Pan-Africanism Movement 2026

---

Built with 🖤 for African Unity

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
