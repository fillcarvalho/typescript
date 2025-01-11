console.log('Section 7')

// GENERIC TYPES
// type string[]
const names = ['Filipe', 'Lucas'];
// type any
const names2 = [];


// They are exactly the same
const names3: Array<string> = [];
const names4: string[] = [];

type User = {
    name: string;
    age: number;
}

const user: User = {
    name: 'Filipe',
    age: 37
}
// You can also use it as a
const users = Array<User>;

// You can also use promisse
// You tell TS what you are returning in a promise, for example, and it can help you
// TO hvae a better code and validate in case you or Lucas make some mistake
const promisse: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data returned'), 2000)
});

promisse.then((data) => {
    // toUppercase is only valid because TS knows that it will be a string
    console.log(data.toUpperCase())
})