import fs from 'fs';
import { basename as _basename, join } from 'path';
import Sequelize from 'sequelize';
import config from '../../config/database';

const basename = _basename(__filename);
const db = {};
const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(
  config[env].database,
  config[env].username,
  config[env].password,
  config[env]
);

fs.readdirSync(__dirname)
  .filter(
    file =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  )
  .forEach(file => {
    const model = sequelize.import(join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export const {
  Banner,
  Categoria,
  Cidade,
  Conteudo,
  ConteudoPagina,
  Regiao,
  Tag,
  Visita,
} = db;

export default db;
