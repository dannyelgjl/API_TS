import { Request, Response } from 'express';

import User from '../schemas/User';

class UserController {
  async index(req: Request, res: Response): Promise<Response> {
    const users = await User.find();

    return res.json(users);
  }

  async store(req: Request, res: Response): Promise<Response> {
    const user = await User.create(req.body);

    return res.json(user);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const user = await User.findById({
      _id: req.params.id
    });

    const { nome, idade, email } = req.body;

    await user?.updateOne({
      nome,
      idade,
      email
    });

    console.log({
      _id: req.params.id,
      nome: nome,
      idade: idade,
      email: email
    });

    return res.json({
      nome,
      idade,
      email
    });
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const user = await User.findById({ _id: req.params.id });

    await user?.remove();

    return res.json('Usuário Deletado');
  }
}

export default new UserController();
