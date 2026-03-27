import { io } from 'socket.io-client';

const SOCKET_URL = 'http://localhost:5000';

let socket;

export const initializeSocket = () => {
  socket = io(SOCKET_URL, {
    reconnection: true,
    reconnectionDelay: 1000,
    reconnectionDelayMax: 5000,
    reconnectionAttempts: 5,
  });

  socket.on('connect', () => {
    console.log('Connected to socket server');
  });

  socket.on('disconnect', () => {
    console.log('Disconnected from socket server');
  });

  return socket;
};

export const getSocket = () => socket;

export const subscribeToChat = (chatType, sessionId, callback) => {
  if (!socket) {
    initializeSocket();
  }

  socket.emit('join-chat', chatType, sessionId);
  socket.on('receive-message', callback);
};

export const sendChatMessage = (message) => {
  if (socket) {
    socket.emit('send-message', message);
  }
};

export const leaveChat = (sessionId) => {
  if (socket) {
    socket.emit('leave-chat', sessionId);
  }
};
