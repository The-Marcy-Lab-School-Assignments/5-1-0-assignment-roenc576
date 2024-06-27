class User {
    static #userCount = 0;

    constructor(name) {
        this.name = name;
        User.incrementUserCount();
    }


    printName() {
        console.log(`Hi, my name is ${this.name}`);
    }

    static incrementUserCount() {
        return ++User.#userCount;
    }

    static getUserCount() {
        return User.#userCount;
    }
}
console.log(User.getUserCount());


