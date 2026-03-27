import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { initializeSocket } from './services/socket';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Events from './pages/Events';
import History from './pages/History';
import Panafricanists from './pages/Panafricanists';
import Opportunities from './pages/Opportunities';
import Testimonies from './pages/Testimonies';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import AppLayout from './layouts/AppLayout';
function App() {
  useEffect(() => {
    // Initialize socket connection
    initializeSocket();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/events" element={<Events />} />
          <Route path="/history" element={<History />} />
          <Route path="/panafricanists" element={<Panafricanists />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/testimonies" element={<Testimonies />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


