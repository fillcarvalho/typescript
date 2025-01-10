let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Filipe';
if ( typeof userInput === 'string' ) {
    userName = userInput;    
}

// without checking, it will generate an error
// userName = userInput;