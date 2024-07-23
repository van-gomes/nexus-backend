import { EntityManager } from 'typeorm';
import { User } from '../entites/User';
export class UserRepository {
    private manager: EntityManager

    constructor(
        manager: EntityManager
    ){
        this.manager = manager
    }

    createUser = async (user: User): Promise<User> => {
        return this.manager.save(user);
    }

    getUser = async (userID: string): Promise<User | null> => {
        return this.manager.findOne(User, {
            where: {
                user_id: userID
            }
        })
    }
}