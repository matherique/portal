import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import axios from 'axios';
import { Usuario } from '../models';

axios.get('http://service.config:5000/read/service.session').then(resp => {
  Usuario.secret = resp.data.secret;
});

class SessionController {
  async login({ email, senha }) {
    const usuario = await Usuario.findOne({
      where: { email },
    });
    if (!usuario) throw new Error('No user with that email');

    const valid = await bcrypt.compare(senha, usuario.senha);
    if (!valid) throw new Error('incorret password');
    const token = jwt.sign(
      {
        usuario: { id: usuario.id, email: usuario.email },
      },
      Usuario.secret,
      {
        algorithm: 'HS512',
        expiresIn: '10d',
      }
    );
    return token;
  }

  async validate(token) {
    const { usuario } = await jwt.verify(token, Usuario.secret);
    if (!usuario) throw new Error('Invalid TOKEN');
    return true;
  }

  async getUserByToken(token) {
    const { usuario } = await jwt.verify(token, Usuario.secret);
    if (!usuario) throw new Error('Invalid TOKEN');
    return usuario;
  }

  async create(dados) {
    const hashed = await bcrypt.hash(dados.senha, 12);
    const usuario = await Usuario.create({ ...dados, senha: hashed });
    return usuario;
  }
}

export default new SessionController();
