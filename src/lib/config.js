export const RESOURCES_API =
  import.meta?.env?.VITE_RESOURCES_API_BASE ||
  (typeof process !== "undefined" ? process.env?.REACT_APP_RESOURCES_API_BASE : undefined) ||
  "http://localhost:5002";

export const TOPICS_API =
  import.meta?.env?.VITE_TOPICS_API_BASE ||
  (typeof process !== "undefined" ? process.env?.REACT_APP_TOPICS_API_BASE : undefined) ||
  "http://localhost:5005";

export const LEARNING_API =
  import.meta?.env?.VITE_LEARNING_API_BASE ||
  (typeof process !== "undefined" ? process.env?.REACT_APP_LEARNING_API_BASE : undefined) ||
  "http://localhost:8000";