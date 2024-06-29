const db = [
    {
    name: "Joana",
    email: "joanasilva@stone.com",
    password: '654321'
    }
]

export class UserService {
    createUser = (name: string, email: string, password: string) => {
        const user = {
            name,
            email,
            password
        }

        db.push(user);
        console.log('DB atualizado!', db);
    }

    getAllUser = () => {
        return db;
    }
}