interface UserInterface {
    name: string;
    email: string;
    age: number;
    register();
    payInvoice();
}

class User implements UserInterface {
    name: string;
    email: string;
    age: number;

    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;

        console.log(`User Created: ${this.name}`);
    }

    public register() {
        console.log(`${this.name} is now registered.`);
    }

    public payInvoice() {
        console.log(`${this.name} paid invoice.`);
    }
}

class Member extends User {
    id: number;

    constructor(id: number, name: string, email: string, age: number) {
        super(name, email, age);

        this.id = id;
    }

    payInvoide() {
        super.payInvoice();
    }
}

let marshall = new User('Marshall Mathers', 'marshall@slimshady.com', 45);

console.log(marshall.age);

marshall.register();

let mike: User = new Member(1, 'Mike Shinoda', 'mike@lp.com', 42);
mike.payInvoice();
