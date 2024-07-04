import { UserService } from "./UserService";

describe('UserService', () => {
    const userService = new UserService();

    it('deve adicionar um novo usuário', () => {
        const mockConsole = jest.spyOn(global.console, 'log');
        userService.createUser('Naty', 'naty@test.com', '123456');
        expect(mockConsole).toHaveBeenCalled();
    });

})