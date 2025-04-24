let valueAny: any = 10;
let valueUnknown: unknown = 10;

valueAny.toString();

// valueUnknown.toString(); // Error: Object is of type 'unknown'.

function processValue(value: unknown) {
    if (typeof value === 'string') {
        console.log(value.toUpperCase()); 
    } else if (typeof value === 'number') {
        console.log(value.toFixed(2)); 
    } else {
        console.log('Unknown type'); 
    }
}

processValue(true); // Output: HELLO, WORLD!