export class User {
    id: number;
    name: string;
    email: string;

    constructor(id: number, name: string, email: string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    getUserInfo(): string {
        return `User: ${this.name}, Email: ${this.email}`;
    }
}