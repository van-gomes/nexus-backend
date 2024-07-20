import { Request } from 'express';
import { makeMockResponse } from '../__mocks__/mockResponse.mock';
import { UserService } from '../service/UserService';
import { UserController } from './UserController';

describe('UserController', () => {
    const mockUserService: Partial<UserService> = {
        createUser: jest.fn()
    }

    const userController = new UserController(
        mockUserService as UserService
    );

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