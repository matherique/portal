import db from '../../src/app/models';

export const truncate = () =>
  Promise.all(
    Object.keys(db.sequelize.models).map(key =>
      db.sequelize.models[key].destroy({ truncate: true, force: true })
    )
  );

export const singTestDatabase = async () => {
  await db.sequelize.sync({ force: true });
};
