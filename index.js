// Function that receives a callback function and calls it
function receivesAFunction(callback) {
    callback();
}

// Function that returns a named function
function namedFunction() {
    return "I am a named function!";
}

function returnsANamedFunction() {
    return namedFunction;
}

// Function that returns an anonymous function
function returnsAnAnonymousFunction() {
    return function() {
        return "I am an anonymous function!";
    };
}

// Exporting the functions to be tested
module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction
};
