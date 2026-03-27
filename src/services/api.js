import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const authService = {
  register: (data) => api.post('/auth/register', data),
  login: (data) => api.post('/auth/login', data),
  getProfile: () => api.get('/auth/profile'),
  updateProfile: (data) => api.put('/auth/profile', data),
};

export const eventService = {
  getEvents: (params) => api.get('/events', { params }),
  getEventById: (id) => api.get(`/events/${id}`),
  createEvent: (data) => api.post('/events', data),
  updateEvent: (id, data) => api.put(`/events/${id}`, data),
  deleteEvent: (id) => api.delete(`/events/${id}`),
};

export const testimonyService = {
  getTestimonies: (params) => api.get('/testimonies', { params }),
  createTestimony: (data) => api.post('/testimonies', data),
  approveTestimony: (id) => api.put(`/testimonies/${id}/approve`),
  deleteTestimony: (id) => api.delete(`/testimonies/${id}`),
};

export const sessionService = {
  getSessions: () => api.get('/sessions'),
  getSessionById: (id) => api.get(`/sessions/${id}`),
  completeSession: (id, data) => api.post(`/sessions/${id}/complete`, data),
  getUserProgress: (userId) => api.get(`/sessions/${userId}/progress`),
};

export const historyService = {
  getHistories: (params) => api.get('/history', { params }),
  getHistoryById: (id) => api.get(`/history/${id}`),
  createHistory: (data) => api.post('/history', data),
};

export const panafricanistService = {
  getPanafricanists: (params) => api.get('/panafricanists', { params }),
  getPanafricanistById: (id) => api.get(`/panafricanists/${id}`),
  createPanafricanist: (data) => api.post('/panafricanists', data),
};

export const opportunityService = {
  getOpportunities: (params) => api.get('/opportunities', { params }),
  getOpportunityById: (id) => api.get(`/opportunities/${id}`),
  createOpportunity: (data) => api.post('/opportunities', data),
};

export const chatService = {
  getMessages: (params) => api.get('/chat', { params }),
  sendMessage: (data) => api.post('/chat', data),
};

export default api;
