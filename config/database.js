module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'airportm_ams'),
        username: env('DATABASE_USERNAME', 'airportm_ams'),
        password: env('DATABASE_PASSWORD', '@Information10'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
