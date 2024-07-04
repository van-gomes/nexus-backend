import express, {Request, Response} from 'express';
import { router } from './routers';

const server = express();

server.use(express.json());
server.use(router);

server.get('/', (request: Request, response: Response) => {
    return response.status(200).json({message: 'Stone API ok!'})
})

server.listen(5000, () => console.log("Server Stone on"));

