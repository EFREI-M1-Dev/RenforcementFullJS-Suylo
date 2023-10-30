import { User } from './user';

export interface UserService {
    add(username: String): User
    getAll(): User[]
    getById(id: number): User | null
    deleteById(id: number): string
}