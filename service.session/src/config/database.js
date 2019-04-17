export default {
  test: {
    username: 'root',
    password: 'root',
    database: 'portal_test',
    host: 'database',
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
    password: 'root',
    database: 'portal_development',
    host: 'database',
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
