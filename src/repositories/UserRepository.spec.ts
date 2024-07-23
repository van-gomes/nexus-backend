import { EntityManager } from "typeorm";
import { getMockEntityManager } from "../__mocks__/mockEntityManager.mock";
import { User } from "../entites/User";
import { UserRepository } from "./UserRepository";

describe('UserRepository', () => {
    let userRepository: UserRepository
    let managerMock: Partial<EntityManager>

    const mockUser: User = {
        user_id: '123456',
        name: 'Test User',
        email:'test@stone.com',
        password: '654321'
    }

    beforeAll(async () => {
        managerMock = await getMockEntityManager({
            saveReturn: mockUser
        })
        userRepository = new UserRepository(managerMock as EntityManager)
    })

    it('deve cadastrar um novo usuário no banco de dados', async () => {
        const response = await userRepository.createUser(mockUser);
        expect(managerMock.save).toHaveBeenCalled();
        expect(response).toMatchObject(mockUser);
    });
});