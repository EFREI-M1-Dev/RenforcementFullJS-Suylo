import { User } from './user';
import { UserService } from './user.service';
import fs from 'fs';

export class UserJSONService implements UserService {

    private filePath: string = 'users.json';

    add(username: string): User {

        if (!fs.existsSync(this.filePath)) {
            fs.writeFileSync(this.filePath, '[]')
        }

        let usersJson = JSON.parse(fs.readFileSync(this.filePath, 'utf8'))
        let id = usersJson.reduce((maxId: number, user: { id: number; }) => Math.max(maxId, user.id), 0) + 1;

        const user = new User(id, username)
        usersJson.push(user)
        fs.writeFileSync(this.filePath, JSON.stringify(usersJson))
        return user
    }

    getById(id: number): User | null {
        const users = JSON.parse(fs.readFileSync(this.filePath, 'utf8'))
        let foundUser: User | null = null

        users.forEach((user: User) => {
            if (user.id === id) {
                foundUser = new User(user.id, user.username)
            }
        })
        return foundUser
    }

    deleteById(id: number): string {
        const users = JSON.parse(fs.readFileSync(this.filePath, 'utf8'))

        const usersUpdated = users.filter((user: User) => { return user.id !== id })

        fs.writeFileSync(this.filePath, JSON.stringify(usersUpdated))

        return "L'utilisateur a bien été supprimé"
    }

    getAll(): User[] {
        const usersJson = JSON.parse(fs.readFileSync(this.filePath, 'utf8'))
        let users: User[] = []

        usersJson.forEach((user: User) => {
            users.push(new User(user.id, user.username))
        })
        return users;
    }
}