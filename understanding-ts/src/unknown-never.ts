let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Filipe';
if ( typeof userInput === 'string' ) {
    userName = userInput;    
}

// without checking, it will generate an error
// userName = userInput;

function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code}
    // while (true) {}
}

generateError('Error', 500);