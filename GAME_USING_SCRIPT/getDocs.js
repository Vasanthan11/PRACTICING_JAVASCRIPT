function breakMe() {
    // Throwing a custom error object with a message property
    throw {
        message: "This is a custom error message",
        code: 1234 // You can add additional properties if desired
    };
}

function main() {
    try {
        // Call breakMe() and handle its potential error
        breakMe();
    } catch (error) {
        // Return the error object instead of throwing it
        return error;
    }
}

// Example usage
const result = main();
console.log(result); // { message: "This is a custom error message", code: 1234 }
