import { User } from './user';

export interface UserService {
    add(username: String): User
    getById(id: number): User | null
}