module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'http://localhost:3000', 'https://api.example.com'],
          'img-src': ["'self'", 'data:', 'https://*.example.com'],
          'script-src': ["'self'", "'unsafe-inline'"],
        },
      },
    },
  },
  'strapi::logger',
  {
    name: 'strapi::cors',
    config: {
      origin: ['https://your-frontend-domain.com', 'http://localhost:3000'],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization'],
      credentials: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];