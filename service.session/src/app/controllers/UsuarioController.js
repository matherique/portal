import { Usuario } from '../models';

class UsuarioController {
  async getOne(id) {
    const result = await Usuario.findOne({ where: { id } });
    return result;
  }
  async create(dados) {
    const result = await Usuario.create(dados);
    return result;
  }
}

const usuario = new UsuarioController();
export default usuario;
