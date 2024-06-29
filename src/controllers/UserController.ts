import {Request, Response, request} from 'express';
import { UserService } from '../service/UserService';

export class UserController {
    createUser = (request: Request, response: Response) => {
        const userService = new UserService();
        const user = request.body;

        if(!user.name) {
            return response.status(400).json({message: "Bad request name required"});
        }

        userService.createUser(user.name, user.email, user.password);
        return response.status(201).json({message: 'Usuário criado com sucesso!'})
    }

    getAllUsers = (request: Request, response: Response) => {
        const userService = new UserService();

        const users = userService.getAllUser();
        return response.status(200).json(users);

    }
}
