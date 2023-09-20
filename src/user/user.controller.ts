import { User } from './user';
import { UserService } from './user.service';

export class UserController {
    constructor(private userService: UserService) {}

    add(username: string): User {

        if (username !== username.trim()) throw new Error('Le nom d\'utilisateur ne peut pas être vide')
        if (username.length > 20) throw new Error('Le nom d\'utilisateur ne peut pas dépasser 20 caractères')
        if (username.length < 3) throw new Error('Le nom d\'utilisateur ne peut pas être inférieur à 3 caractères')

        return this.userService.add(username);
    }

    getById(id: number): User | null {
        if (id !== Math.floor(id)) throw new Error('L\'id doit être un nombre entier')
        if (id < 0) throw new Error('L\'id ne peut pas être négatif')

        return this.userService.getById(id);
    }

    deleteById(id: number): string {

        if (id !== Math.floor(id)) throw new Error('L\'id doit être un nombre entier')
        if (id < 0) throw new Error('L\'id ne peut pas être négatif')

        return this.userService.deleteById(id);
    }

    getAll(): User[] {
        return this.userService.getAll();
    }
}