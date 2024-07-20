import { User, UserService } from './UserService';

describe('UserService', () => {
    const mockDB: User[] = [];
    const userService = new UserService(mockDB);

    it('deve adicionar um novo usuário', () => {
        const mockConsole = jest.spyOn(global.console, 'log');
        userService.createUser('Naty', 'naty@test.com', '123456');
        expect(mockConsole).toHaveBeenCalledWith('DB atualizado!', mockDB);
    });

})