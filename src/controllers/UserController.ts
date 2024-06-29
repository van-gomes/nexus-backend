import {Request, Response, request} from 'express';

const db = [
    {
    name: "Joana",
    email: "joanasilva@stone.com",
    password: 654321
    }
]

export class UserController {
    createUser = (request: Request, response: Response) => {
        const user = request.body;
        db.push(user);
        console.log(db);
        return response.status(201).json({message: 'Usuário criado com sucesso!'})
    }
}
