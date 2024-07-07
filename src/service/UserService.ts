export interface User {
    name: string;
    email: string;
    password: string;
}

const db = [
    {
    name: "Joana",
    email: "joanasilva@stone.com",
    password: '654321'
    }
]

export class UserService {
    /*injeção de dependência para testar apenas createUser
    e simular/trabalhar com um banco de dados*/
    db: User[];

    constructor(database = db) {
         this.db = database;
    }

    createUser = (name: string, email: string, password: string) => {
        const user = {
            name,
            email,
            password
        }

        this.db.push(user);
        console.log('DB atualizado!', this.db);
    }

    getAllUser = () => {
        return db;
    }
}