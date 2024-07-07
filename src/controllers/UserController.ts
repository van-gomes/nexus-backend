import {Request, Response, request} from 'express';
import { UserService } from '../service/UserService';

export class UserController {
    userService: UserService;

    //injeção de dependência para mocar UserService
    constructor(
        userService = new UserService()
    ){
        this.userService = userService;
    }

    createUser = (request: Request, response: Response) => {
        const user = request.body;

        if(!user.name) {
            return response.status(400).json({message: "Bad request name required"});
        }

        this.userService.createUser(user.name, user.email, user.password);
        return response.status(201).json({message: 'Usuário criado com sucesso!'})
    }

    getAllUsers = (request: Request, response: Response) => {
        const users = this.userService.getAllUser();
        return response.status(200).json(users);
    }
}
