import axios from "axios";

const API_BASE = "http://localhost:8080/api/habits";

export const getHabitByUser = (userId) => axios.get(`${API_BASE}/user/${userId}`);

export const completeHabit = (habitId) => axios.get(`${API_BASE}/${habitId}/completed`);

export const getAnalytics = (habitId) => axios.get(`${API_BASE}/${habitId}/analytics`);