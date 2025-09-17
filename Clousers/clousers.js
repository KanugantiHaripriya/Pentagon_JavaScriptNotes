function Outer() {
    console.log("This is an outer function");
    function inner() {
        console.log("This is inner function");
    }
    return inner; // return function itself
}

let result = Outer(); // runs Outer
result();             // now runs inner
