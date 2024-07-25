import { UserService } from './UserService';

jest.mock('../repositories/UserRepository');
jest.mock('../database', () => {
    initialize: jest.fn()
});

const mockUserRepository = require('../repositories/UserRepository');

describe('UserService', () => {
    const userService = new UserService(mockUserRepository);
   
    it('deve adicionar um novo usuário', async () => {
        mockUserRepository.createUser = jest.fn().mockImplementation(() => Promise.resolve({
            user_id: '1',
            name: 'Naty',
            email: 'naty@test.com',
            password: '123456'
        }))
        const response = await userService.createUser('Naty', 'naty@test.com', '123456');
        expect(mockUserRepository.createUser).toHaveBeenCalled();
        expect(response).toMatchObject({
            user_id: '1',
            name: 'Naty',
            email: 'naty@test.com',
            password: '123456'
        });
    });

})