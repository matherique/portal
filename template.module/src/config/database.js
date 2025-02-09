export default {
  test: {
    username: 'root',
    password: null,
    database: 'portal_test',
    host: '127.0.0.1',
    dialect: 'mysql',
    logging: false,
    define: {
      timestamps: false,
      underscored: true,
      underscoredAll: true,
      upperCase: false,
    },
  },
  development: {
    username: 'root',
    password: null,
    database: 'portal_development',
    host: '127.0.0.1',
    dialect: 'mysql',
    logging: false,
    define: {
      timestamps: false,
      underscored: true,
      underscoredAll: true,
      upperCase: false,
    },
  },
};
