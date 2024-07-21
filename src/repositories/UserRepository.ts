import { EntityManager } from 'typeorm';
import { User } from '../entites/User';

export class UserRepository {
    private manager: EntityManager

    constructor(
        manager: EntityManager
    ){
        this.manager = manager
    }

    createUser = async (user: User) => {
        return this.manager.save(user);
    }
}