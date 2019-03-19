import { Regiao } from '../models';

class RegiaoController {
	async getAll() {
		const result = await Regiao.findAll();
		return result;
	}

	async getOne(_, { id }) {
		const result = await Regiao.findOne({ id });
		return result;
	}

	async create(_, args) {
		const result = await Regiao.create({ ...args });
		return result;
	}

	async update(_, args) {
		const { id } = args;
		const result = await Regiao.update({ ...args }, { where: { id } });

		if (result[0] === 0)
			return {
				ok: false,
				error: {
					message: `Cannot update regiao with id ${id}`,
				},
			};

		return { response: { ok: true } };
	}

	async delete(_, { id }) {
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
