/**
 * Configuração centralizada da API
 * Permite fácil mudança entre desenvolvimento e produção
 */

// URL base da API - pode ser configurada via variável de ambiente
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3500';

// Endpoints da API
export const API_ENDPOINTS = {
  // Autenticação
  LOGIN: `${API_BASE_URL}/api/v1/auth`,
  REFRESH: `${API_BASE_URL}/api/v1/auth/refresh`,
  LOGOUT: `${API_BASE_URL}/api/v1/auth/logout`,

  // Utilizadores
  USERS: `${API_BASE_URL}/api/v1/users`,
  USER_BY_ID: `${API_BASE_URL}/api/v1/users/id`,
  USER_BY_NAME: `${API_BASE_URL}/api/v1/users/name`,

  // Exercícios
  EXERCISES: {
    ALL: `${API_BASE_URL}/api/v1/exercises/allExercises`,
    BY_ID: (id) => `${API_BASE_URL}/api/v1/exercises/${id}`,
    BODY_PARTS: `${API_BASE_URL}/api/v1/exercises/allBodyParts`,
    TARGET_MUSCLES: `${API_BASE_URL}/api/v1/exercises/allTargetMuscles`,
    EQUIPMENTS: `${API_BASE_URL}/api/v1/exercises/allEquipments`,
    BY_BODY_PART: (bodyPart) => `${API_BASE_URL}/api/v1/exercises/bodyPart/${bodyPart}`,
    BY_TARGET: (target) => `${API_BASE_URL}/api/v1/exercises/target/${target}`,
    BY_EQUIPMENT: (equipment) => `${API_BASE_URL}/api/v1/exercises/equipment/${equipment}`,
  },

  // Treinos
  WORKOUTS: `${API_BASE_URL}/api/v1/user/workouts&exercises`,
  DELETE_WORKOUT: `${API_BASE_URL}/api/v1/user/workouts&exercises/workouts/`,

  // Calendário
  CALENDAR: {
    WORKOUTS: `${API_BASE_URL}/api/v1/user/calendarOptions/workouts`,
    ASSIGN_WORKOUT: `${API_BASE_URL}/api/v1/user/calendarOptions/assignWorkout`,
    REMOVE_WORKOUT: `${API_BASE_URL}/api/v1/user/calendarOptions/removeWorkout`,
  },

  // Atividades
  ACTIVITIES: `${API_BASE_URL}/api/v1/user/activities`,
};

// Headers padrão para requisições autenticadas
export const getAuthHeaders = (token) => ({
  'Authorization': `Bearer ${token}`,
  'Content-Type': 'application/json',
});

// Headers padrão para requisições não autenticadas
export const getDefaultHeaders = () => ({
  'Content-Type': 'application/json',
});

export default API_ENDPOINTS;
