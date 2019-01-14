let myString: string;
let myNum: number;
let myBool: boolean;
let something: string;
let myVar: any;

// one way of defining arrays
// let strArray: String[];
// let numArray: Number[];
// let boolArray: Boolean[];

// another way of defining arrays
let strArray: Array<string>;
let numArray: Array<number>;
let boolArray: Array<boolean>;

// tuples
let strNumTuple: [string, number];

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
