/// <reference types="vite/client" />

const env = import.meta.env.VITE_ENV;
const localURL = import.meta.env.VITE_LOCAL_API_URL || "http://localhost:3003";
const prodURL = import.meta.env.VITE_API_URL;
const isDev = env == "local";

const environment = {
  API_URL: !isDev && prodURL ? prodURL : localURL,
};

export default environment;
