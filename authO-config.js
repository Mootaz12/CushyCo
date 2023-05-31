const config = {
  domain: "YOUR_AUTH0_DOMAIN",
  clientId: import.meta.env.VITE_AUTH_ID,
  redirectUri: window.location.origin,
};

export default config;
