function fullName (firstName, lastName) {
    return firstName + " " + lastName;
}
let result = fullName("Kunal", "Gupta");
let expected = "Kunal Gupta";
if (result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`);
}