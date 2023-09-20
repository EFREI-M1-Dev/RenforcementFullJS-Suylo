import { User } from './user';
import { UserService } from './user.service';

export class UserController {
    constructor(private userService: UserService) {}

    add(username: string): User {
        if (username !== username.trim()) throw new Error('Username cannot be empty');
        if (username.length > 20) throw new Error('Username cannot be longer than 20 characters');
        if (username.length < 3) throw new Error('Username cannot be shorter than 3 characters');

        return this.userService.add(username);
    }

    getById(id: number): User | null {
        if (id !== Math.floor(id)) throw new Error('Id must be a whole number');
        if (id < 0) throw new Error('Id cannot be negative');

        return this.userService.getById(id);
    }
}