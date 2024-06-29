import express, {Request, Response, request} from 'express';
import { UserController } from './controllers/UserController';

const server = express();

const userController = new UserController();

server.use(express.json());

server.get('/', (request: Request, response: Response) => {
    return response.status(200).json({message: 'Stone API ok!'})
})

server.post('/user', userController.createUser);

server.listen(5000, () => console.log("Server Stone on"));

