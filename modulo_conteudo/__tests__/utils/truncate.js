import db from '../../src/app/models';

export default () =>
  Promise.all(
    Object.keys(db.sequelize.models).map(key =>
      db.sequelize.models[key].destroy({ truncate: true, force: true })
    )
  );
