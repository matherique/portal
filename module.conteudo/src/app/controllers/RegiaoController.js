import { Regiao } from '../models';

class RegiaoController {
  async getAll() {
    const result = await Regiao.findAll();
    return result;
  }

  async getOne(id) {
    const result = await Regiao.findOne({ where: { id } });
    return result;
  }

  async create(dados) {
    const result = await Regiao.create(dados);
    return result;
  }

  async update(dados) {
    const { id } = dados;
    const result = await Regiao.update({ ...dados }, { where: { id } });
    if (result[0] === 0)
      return {
        ok: false,
        error: {
          message: `Cannot update regiao with id ${id}`,
        },
      };

    return { ok: true };
  }

  async delete(id) {
    const result = await Regiao.destroy({ where: { id } });
    if (!result)
      return {
        ok: false,
        error: {
          message: `Cannot delete regiao with id ${id}`,
        },
      };

    return { ok: true };
  }
}

export default new RegiaoController();
