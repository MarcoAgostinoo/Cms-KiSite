const path = require('path');

module.exports = ({ env }) => {
  const client = env('DATABASE_CLIENT', 'postgres');
  const connections = {
    postgres: {
      connection: {
        connectionString: env('DATABASE_URL'),
        host: env('PGHOST'),
        port: env.int('PGPORT'),
        database: env('PGDATABASE'),
        user: env('PGUSER'),
        password: env('PGPASSWORD'),
        ssl: {
          rejectUnauthorized: false
        },
        schema: env('DATABASE_SCHEMA', 'public'),
      },
      pool: {
        min: env.int('DATABASE_POOL_MIN', 2),
        max: env.int('DATABASE_POOL_MAX', 10)
      },
    }
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};