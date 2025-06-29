"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    getUserInfo() {
        return `User: ${this.name}, Email: ${this.email}`;
    }
}
exports.User = User;
