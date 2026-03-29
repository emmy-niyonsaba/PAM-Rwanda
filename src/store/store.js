import { create } from 'zustand';
import { eventService, sessionService, testimonyService, historyService, panafricanistService, opportunityService } from '../services/api';

// Auth Store
export const useAuthStore = create((set) => ({
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
  token: localStorage.getItem('token'),
  isAuthenticated: !!localStorage.getItem('token'),

  login: (userData, token) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData));
    set({
      user: userData,
      token,
      isAuthenticated: true,
    });
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    set({
      user: null,
      token: null,
      isAuthenticated: false,
    });
  },

  setUser: (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    set({ user: userData });
  },
}));

// Event Store with API integration
export const useEventStore = create((set, get) => ({
  events: [],
  filteredEvents: [],
  selectedEvent: null,
  loading: false,
  error: null,

  // Fetch all events
  fetchEvents: async (filter = 'upcoming') => {
    set({ loading: true, error: null });
    try {
      const response = await eventService.getEvents({ filter });
      set({ events: response.data.events || [], filteredEvents: response.data.events || [] });
    } catch (error) {
      set({ error: error.message });
      console.error('Error fetching events:', error);
    } finally {
      set({ loading: false });
    }
  },

  // Filter events
  filterEvents: (filter) => {
    const events = get().events;
    let filtered = events;
    
    if (filter === 'upcoming') {
      filtered = events.filter(e => new Date(e.date) > new Date());
    } else if (filter === 'past') {
      filtered = events.filter(e => new Date(e.date) < new Date());
    }
    
    set({ filteredEvents: filtered });
  },

  setEvents: (events) => set({ events, filteredEvents: events }),
  setSelectedEvent: (event) => set({ selectedEvent: event }),
  clearEvents: () => set({ events: [], filteredEvents: [], selectedEvent: null }),
}));

// Session Store with API integration
export const useSessionStore = create((set, get) => ({
  sessions: [],
  userProgress: [],
  currentSession: null,
  loading: false,
  error: null,

  // Fetch all sessions
  fetchSessions: async () => {
    set({ loading: true, error: null });
    try {
      const response = await sessionService.getSessions();
      set({ sessions: response.data.sessions || [] });
    } catch (error) {
      set({ error: error.message });
      console.error('Error fetching sessions:', error);
    } finally {
      set({ loading: false });
    }
  },

  // Fetch user progress
  fetchUserProgress: async () => {
    set({ loading: true, error: null });
    try {
      const response = await sessionService.getUserProgress();
      set({ userProgress: response.data.progress || [] });
    } catch (error) {
      set({ error: error.message });
      console.error('Error fetching progress:', error);
    } finally {
      set({ loading: false });
    }
  },

  setSessions: (sessions) => set({ sessions }),
  setUserProgress: (progress) => set({ userProgress: progress }),
  setCurrentSession: (session) => set({ currentSession: session }),
  clearSessions: () => set({ sessions: [], userProgress: [], currentSession: null }),
}));

// Testimony Store with API integration
export const useTestimonyStore = create((set) => ({
  testimonies: [],
  loading: false,
  error: null,

  // Fetch testimonies
  fetchTestimonies: async () => {
    set({ loading: true, error: null });
    try {
      const response = await testimonyService.getTestimonies();
      set({ testimonies: response.data.testimonies || [] });
    } catch (error) {
      set({ error: error.message });
      console.error('Error fetching testimonies:', error);
    } finally {
      set({ loading: false });
    }
  },

  // Add testimony
  addTestimony: async (content) => {
    try {
      const response = await testimonyService.createTestimony({ content });
      set((state) => ({
        testimonies: [response.data.testimony, ...state.testimonies],
      }));
      return response.data;
    } catch (error) {
      set({ error: error.message });
      throw error;
    }
  },

  setTestimonies: (testimonies) => set({ testimonies }),
  clearTestimonies: () => set({ testimonies: [], error: null }),
}));

// History Store with API integration
export const useHistoryStore = create((set) => ({
  histories: [],
  loading: false,
  error: null,

  // Fetch histories
  fetchHistories: async (filters = {}) => {
    set({ loading: true, error: null });
    try {
      const response = await historyService.getHistories(filters);
      set({ histories: response.data.histories || [] });
    } catch (error) {
      set({ error: error.message });
      console.error('Error fetching histories:', error);
    } finally {
      set({ loading: false });
    }
  },

  setHistories: (histories) => set({ histories }),
  clearHistories: () => set({ histories: [], error: null }),
}));

// Panafricanist Store with API integration
export const usePanafricanistStore = create((set) => ({
  panafricanists: [],
  loading: false,
  error: null,

  // Fetch panafricanists
  fetchPanafricanists: async () => {
    set({ loading: true, error: null });
    try {
      const response = await panafricanistService.getPanafricanists();
      set({ panafricanists: response.data.panafricanists || [] });
    } catch (error) {
      set({ error: error.message });
      console.error('Error fetching panafricanists:', error);
    } finally {
      set({ loading: false });
    }
  },

  setPanafricanists: (panafricanists) => set({ panafricanists }),
  clearPanafricanists: () => set({ panafricanists: [], error: null }),
}));

// Opportunity Store with API integration
export const useOpportunityStore = create((set) => ({
  opportunities: [],
  loading: false,
  error: null,

  // Fetch opportunities
  fetchOpportunities: async (filters = {}) => {
    set({ loading: true, error: null });
    try {
      const response = await opportunityService.getOpportunities(filters);
      set({ opportunities: response.data.opportunities || [] });
    } catch (error) {
      set({ error: error.message });
      console.error('Error fetching opportunities:', error);
    } finally {
      set({ loading: false });
    }
  },

  setOpportunities: (opportunities) => set({ opportunities }),
  clearOpportunities: () => set({ opportunities: [], error: null }),
}));

// Chat Store
export const useChatStore = create((set, get) => ({
  messages: [],
  currentChatType: 'general',
  loading: false,
  error: null,

// the meassage comme tn 
  setMessages: (messages) => set({ messages }),
  addMessage: (message) => {
    const current = get().messages;
    set({ messages: [...current, message] });
  },
  setCurrentChatType: (chatType) => set({ currentChatType: chatType }),
  clearMessages: () => set({ messages: [] }),
  clearChat: () => set({ messages: [], currentChatType: 'general' }),
}));
