import { Request } from 'express';
import { makeMockResponse } from '../__mocks__/mockResponse.mock';
import { UserController } from './UserController';

const mockUserService =  {
    createUser: jest.fn()
}

jest.mock('../service/UserService', () => {
    return {
        UserService: jest.fn().mockImplementation(() => {
            return mockUserService
        })
    }
});

describe('UserController', () => {
    const userController = new UserController();

    it('deve adicionar um novo usuário', () => {
        console.log(userController);

        const mockRequest = {
            body: {
                name: 'Lilian',
                email: 'lilian@stone.com',
                password: 'ls1234'
            }
        } as Request
        const mockResponse = makeMockResponse();
        userController.createUser(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(201);
        expect(mockResponse.state.json).toMatchObject({message: 'Usuário criado com sucesso!'});
    })
});