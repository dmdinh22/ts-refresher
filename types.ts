let myString: String;
let myNum: Number;
let myBool: Boolean;
let something: String;
let myVar: any;

// one way of defining arrays
// let strArray: String[];
// let numArray: Number[];
// let boolArray: Boolean[];

// another way of defining arrays
let strArray: Array<String>;
let numArray: Array<Number>;
let boolArray: Array<Boolean>;

// tuples
let strNumTuple: [String, Number];

something = 'what';
myString = `${something} is going on`;
myNum = 5.5;
myBool = false;
myVar = 'string';

strArray = ['Hello', 'is', 'it', 'me', 'you', 'are', 'looking', 'for'];
numArray = [1, 2, 3];
boolArray = [true, false, true];

strNumTuple = ['test', 4];

let myVoid: void = undefined;
let myNull: null = null;
let myUndefined: undefined = undefined;

console.log(myVoid);
