import jwt from 'jsonwebtoken';
import { Usuario } from '../models';

const SECRET = 'vaisefudercapadodemerda';

class SessionController {
  async login({ email, senha }) {
    const user = await Usuario.findOne({
      where: { email },
      attributes: ['id', 'email'],
    });
    if (!user) throw new Error('No user with that email');
    // TODO: validar senha
    const token = jwt.sign(
      {
        usuario: user,
      },
      SECRET,
      {
        algorithm: 'HS512',
        expiresIn: '1y',
      }
    );
    return token;
  }

  async validate(token) {
    const { user } = await jwt.verify(token, SECRET);
    if (!user) throw new Error('Invalid TOKEN');
    return true;
  }

  async getUserByToken(token) {
    const { user } = await jwt.verify(token, SECRET);
    if (!user) throw new Error('Invalid TOKEN');
    return user;
  }
}

const usuario = new SessionController();
export default usuario;
