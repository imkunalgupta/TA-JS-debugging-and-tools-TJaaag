function toAdd (numA, numB){
    return numA + numB;
}

function toMultiply (numA, numB){
    return numA * numB;
}

function sayHello(name){
    return 'Hello ${name}';
}
let result, expected;

function test(message, callback){
    try {
      callback();
      console.log("✅", message);
    } catch (error){
        console.error(error);
        console.log("❎", message);
    }
}
// Assertion Liberary
function expect(actual){
    return {
        toEqual: function(expected){
            if (actual !== expected){
                throw new Error (`${actual} is not equal to ${expected}`)
            }
        },
        toBeEqual: function(expected){
            if (typeof actual !== expected){
                throw new Error (`${typeof actual} is not equal to ${expected}`)
            } 
        }
    };
}


function testAdd() {
    let result = toAdd(2, 4);
    let expected = 6;
    expect(result).toEqual(expected);
    //if (result !== expected){
    //    throw new Error (`${result} is not equal to ${expected}`)
    //} 
}
test("adding 2 and 4", testAdd);

function testMultiply() {
    let result = toMultiply(20, 4);
    let expected = 80;
    expect(result).toEqual(expected);
    //if (result !== expected){
    //    throw new Error (`${result} is not equal to ${expected}`)
    //}
}
test("multiplying 20 and 4", testMultiply);

function testSayHello() {
    let result = sayHello("Arya");
    let expected = 'string';
    expect(result).toBeEqual(expected);
    //if (typeof result !== expected){
    //    throw new Error (`${typeof result} is not equal to ${expected}`)
    //}
}
test("pass Arya and expect string", testSayHello);

test("add 10 + 10 to be equal 20", () => {
    expect(toAdd(10, 10)).toEqual(20);
});
test("add 18 + 10 to be equal 28", () => {
    expect(toAdd(18, 10)).toBeEqual(28);
});

test("multiply 10 * 10 to be equal 100", () => {
    expect(toMultiply(10, 10)).toEqual(100);
});
test("multiply 10 * 11 to be equal 110", () => {
    expect(toMultiply(10, 11)).toBeEqual(110);
});


