import express, {Request, Response, request} from 'express';

const server = express();

server.use(express.json());

server.get('/', (request: Request, response: Response) => {
    return response.status(200).json({message: 'Stone API ok!'})
})

server.post('/user', (request: Request, response: Response) => {
    const body = request.body;
    return response.status(201).json({message: 'Usuário criado com sucesso!'})
    console.log(body);
})

server.listen(5000, () => console.log("Server Stone on"));

