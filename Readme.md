# Recap Mission-1

### How To Install and Run ts

- Install Ts Globally
- Write "tsc index.ts" to convert the file in js
- Write "tsc Module-1/src/index.ts" to convert the file to js
- to configure the ts file we have to write "tsc --init"
- Change the Root Dir and Out Dir
- After This do not have run "tsc Module-1/src/index.ts" like this we just can write "tsc"

### To run the ts file directly

- install

```ts
npm i -g ts-node-dev --save-dev
```

- then run

```ts
ts-node-dev --respawn --transpile-only .\Module-1\src\1.7.ts
```

## Basic Types Of Typescript Module-1-0

#### Js Types

1. Number
2. String
3. Boolean
4. Null
5. Undefined
6. Object
7. Symbol

#### Ts Types

##### Primitive

- Number
- String
- Boolean
- Null
- Undefined
- Symbol
- BigInt

##### Non-Primitive

- Array
- Object
- Tuple

##### Special Types

- any
- never
- unknown
- void

##### Advanced Types

- Union
- Intersection
- Interfaces
- Enums
- Type Alias

##### Advanced Types

- Type of Function
- Optional Parameter
- Default Parameter
- Arrow Function with Types

## Data Types Deep Understanding

##### Common Examples

- Implicit Data Types : Which Means It Will automatically detects the data types

```ts
let firstName = "Sazid";
```

- Explicit Dat Types : It Means We Will say what will be the data types

```ts
let firstName: String = "Sazid";
```

##### Primitive Data Types

- Number

```ts
let roll: number = 123;
```

- Boolean

```ts
let isAdmin: boolean = true;
```

- Undefined

```ts
let x: undefined = undefined;
```

- null

```ts
let y : null : null
```

- Any types : We can set any value

```ts
let d,
  d = 123,
  d = "Add";
d = true;

let d: any = 10;
```

## Non-Primitive

- Array

```ts
let friends = ["sazid", "Shakil"];

let friends: string[] = ["sazid", "Shakil"];
let eligibleRoleList: number[] = [1, 2, 3, 4, 5, 6];
```

- Tuple : Used Where to maintain Order, push pop or other functionality is not applicable here since tuple fixed the order

```ts
let coordinate = [1, 2];

let coordinates: [number, number] = [1, 14];

let info: [number, string] = [12, "sazid"];
let info1: [number, string, boolean] = [12, "sazid", true];

//  though we can change the tuple in different way

const originalTuple: [number, string] = [1, "Hello"];

const newTuple = [...originalTuple, true];
```

##### Functions In Typescript

- Normal Function

```ts
function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(1, 2);
```

- Arrow Functions

```ts
const addArrow = (num1: number, num2: number): number => num1 + num2;
```

- Setting Default Value

```ts
function add1(num1: number = 10, num2: number): number {
  return num1 + num2;
}
add1(1, 0);
```

- If any object contains functions inside its called method

```ts
const poorUser = {
  name: "sazid",
  balance: 0,

  // addBalance(balance :number) :string {
  //     return `My New Balance Is : ${this.balance}`;
  // }

  addBalance(balance: number): number {
    return this.balance + balance;
  },
};
```

- More

```ts
const array: number[] = [1, 2, 3, 4, 5];

const newArray: number[] = array.map(
  (element: number): number => element * element
);
```

##### Object Optional and Literal Types

- Object With js

```ts
const user = {
  firstName: "Sazid",
  lastName: "Shahnawaz",
  middleName: "Aura",
};
```

- Object With Ts

```ts
const user: {
  firstName: string;
  lastName: string;
  middleName: string;
} = {
  firstName: "Sazid",
  lastName: "Shahnawaz",
  middleName: "Aura",
};
```

#### literal types

- It is Like Whatever we write while defining types it becomes a type

```ts
const user: {
  company: "PH"; // if we do not use PH it will show error.
  firstName: string;
  middleName?: string;
  lastName: string;
  isMarried: boolean;
} = {
  company: "PH",
  firstName: "Shahnawaz",
  lastName: "Sazid",
  isMarried: true,
};

// can do this using readOnly as well

const user2: {
  readOnly company :string:
  firstName: string;
  middleName?: string;
  lastName: string;
  isMarried: boolean;
} = {
  company: "PH",
  firstName: "Shahnawaz",
  lastName: "Sazid",
  isMarried: true,
};
```

## Spread And Rest Operator

```ts
// spread operator
const bros1: string[] = ["s", "a", "z", "i", "d"];
const bros2: string[] = ["s", "h", "a", "h", "n", "a", "w", "a", "z"];
const bros3: string[] = [...bros1, ...bros2];
bros1.push(...bros2);

//    more

const mentor1 = {
  typescript: "Mezba",
  redux: "Mir",
  dbms: "Mizan",
};
const mentor2 = {
  prisma: "Firoze",
  next: "Tanmoy",
  cloud: "Nahid",
};
const mentorList = { ...mentor1, ...mentor2 };

// more
const numbers = [10, 20, 30];

const maxNumber = Math.max(...numbers);

console.log(maxNumber); // Output: 30

//  copying Object

const originalUser = { name: "Shahnawaz", age: 30 };
const copiedUser = { ...originalUser, country: "India" };

console.log(copiedUser);
// Output: { name: 'Shahnawaz', age: 30, country: 'India' }

// margin Objects

const person = { name: "Shahnawaz", age: 30 };
const job = { title: "Developer", company: "TechCorp" };

const mergedPerson = { ...person, ...job };

console.log(mergedPerson);
// Output: { name: 'Shahnawaz', age: 30, title: 'Developer', company: 'TechCorp' }
```

### Rest Operator

```ts
//    Rest Operator
const greetFriends = (...friends: string[]) => {
  friends.forEach((friend: string) => console.log(`Hello, ${friend}`));
};

greetFriends("Sazid", "Shahnawaz", "Aura", "Shahin", "Sakib");

// More

const fruits = ["Apple", "Banana", "Mango", "Grapes"];

const [firstFruit, secondFruit, ...remainingFruits] = fruits;

console.log(firstFruit); // Output: Apple
console.log(secondFruit); // Output: Banana
console.log(remainingFruits); // Output: ["Mango", "Grapes"]

// more

const user = {
  name: "Shahnawaz",
  age: 30,
  country: "India",
  profession: "Developer",
};

const { name, ...otherDetails } = user;

console.log(name); // Output: Shahnawaz
console.log(otherDetails); // Output: { age: 30, country: 'India', profession: 'Developer' }
```

## Rest (`...`) vs. Spread (`...`) Operators in TypeScript

#### Purpose and Example Usage

| Operator           | Purpose                                                | Example Usage                                     |
| ------------------ | ------------------------------------------------------ | ------------------------------------------------- |
| **Rest (`...`)**   | Gathers multiple elements into an **array**            | Function parameters, object & array destructuring |
| **Spread (`...`)** | Expands (spreads) elements from an **array or object** | Copying, merging, passing arguments               |

---

#### Key Differences Between Rest and Spread

| Feature     | Rest (`...`)                       | Spread (`...`)                      |
| ----------- | ---------------------------------- | ----------------------------------- |
| **Purpose** | Collects values into an array      | Expands values from an array/object |
| **Usage**   | Function parameters, destructuring | Copying, merging, passing arguments |
| **Example** | `(...args) => {}`                  | `[...arr1, ...arr2]`                |

## Destructuring In Typescript

```ts
// destructuring
const user = {
  id: 345,
  name: {
    firstName: "Sazid",
    lastName: "Shahnawaz",
    middleName: "Aura",
  },
  contactNo: "0167",
  address: "Uganda",
};

const {
  contactNo: PhoneNumber,
  name: { firstName, lastName },
} = user;

// Array Destructuring

const myFriends = ["jodu", "modu", "kodu", "podu", "todu"];

const [a, b, bestFriend1] = myFriends;

const [, , bestFriend] = myFriends;

const [, , , ...rest] = myFriends; // rest would be ['podu', 'todu']
```

## Type Alias In Typescript

```ts
// type alias

type Student = {
  name: string;
  age: number;
  gender: string;
  contactNo: string;
  address: string;
};

const student1: Student = {
  name: "Sazid",
  age: 30,
  gender: "Male",
  contactNo: "0167",
  address: "Uganda",
};

console.log(student1);

// more
type UserName = string;
type IsAdmin = boolean;

//  Type Alias In Function

type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;

//    type alias in Array

type StringArray = String[];

const names: StringArray = ["Sazid", "Shahnawaz", "Aura", "Shahin", "Sakib"];

//  type alias in object
type Person = {
  name: string;
  age: number;
};

const people: Person[] = [
  {
    name: "Sazid",
    age: 30,
  },
  {
    name: "Shahnawaz",
    age: 25,
  },
  {
    name: "Aura",
    age: 20,
  },
];
```

## Unions and Intersection Types

#### Union Types

```ts
//  Union Type
type FrontendDeveloper = "Fakibaz" | "Jr.Dev";
type BackendDeveloper = "FrontendDeveloper" | "Fullstack Developer";

type newDeveloper = FrontendDeveloper | BackendDeveloper;

type User = {
  name: string;
  email?: string;
  gender: "Male" | "Female";
  bloodGroup: "A+" | "B+" | "AB+" | "O+";
};

const user: User = {
  name: "sazid",
  email: "sazod@gmail.com",
  gender: "Male",
  bloodGroup: "B+",
};
```

#### Intersection Types

```ts
//   Intersection Type
type FrontendDeveloper = {
  skill: string[];
  designation1: "Frontend Developer";
};
type BackendDeveloper = {
  skill: string[];
  designation2: "Backend Developer";
};

type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

const fullstackDeveloper: FullstackDeveloper = {
  skill: ["HTML", "CSS", "JS"],
  designation1: "Frontend Developer",
  designation2: "Backend Developer",
};
```

## Ternary Operator/ Optional Chaining / Nullish Coalescing

### Ternary Operator

```ts
// normal if else

const age: number = 18;
if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a kid");
}

// using ternary operator
const isAdult = age >= 18 ? "adult" : "kid";

console.log(`You are a ${isAdult}-used Ternary`);
```

### Nullish Coalescing Operator

- If the situation is like we have to take decisions based on the null or undefined value, then we can use the nullish coalescing operator.

```ts
const isAuthenticated = true;
const result1 = isAuthenticated ?? "Guest";
// The Nullish Coalescing Operator (??) checks if isAuthenticated is null or undefined.
const result2 = isAuthenticated ? isAuthenticated : "Guest";

console.log(result1, result2);
```

## Nullable Types

- This means setting Null Value

```ts
// Nullable Types

const searchName = (value: string | null) => {
  if (value) {
    console.log("Searching");
  } else {
    console.log("there is nothing to search");
  }
};
searchName(null);
```

## Unknown Type

- This Means Setting Unknown Value so that any type can come

```ts
// unknown Type

const getSpeedInMeterPerSecond = (value: unknown) => {
  if (typeof value === "number") {
    const convertedSpeed = (value * 1000) / 3600;
    console.log(`The Speed is ${convertedSpeed} ms^-1 `);
  } else if (typeof value === "string") {
    const [result, unit] = value.split(" ");
    const convertedSpeed = (parseFloat(result) * 1000) / 3600;
    console.log(`The Speed is ${convertedSpeed} ms^-1 `);
    console.log(result);
  } else {
    console.log("Wrong Input");
  }
};

getSpeedInMeterPerSecond(1000);
getSpeedInMeterPerSecond(`1000 kmh^-1`);
```

## Never Type

- The never type in TypeScript represents a value that never occurs. It is used for functions that never return

```ts
// never type
const throwError = (msg: string): never => {
  throw new Error(msg);
};
throwError("Bap re bap Error hOi gelo");
```

# Module-2 : EXPLORE ADVANCE TYPES OF TYPESCRIPT

#### Type Assertion : Sometime s Ts Might be Unsure of available Types

#### Interface, Types vs Interfaces : Its like blueprint for your Object, defining structure

#### Generics

## Type Assertion / Type Narrowing

```ts
//  Type assertion : Nije theke bole dilam ki hobe type ta

let anything: any;

anything = 123;
(anything as number).toFixed;

anything = "next Dev";

(anything as string).includes;

// another example

const kgToGm = (value: string | number): string | number | undefined => {
  if (typeof value === "string") {
    const convertedValue = parseFloat(value) * 1000;
    return `The Value is : ${convertedValue}`;
  }
  if (typeof value === "number") {
    return value * 1000;
  }
};

const res1 = kgToGm(1000) as number;

const res2 = kgToGm("1000") as string;

// example using custom types

type CustomError = {
  message: string;
};

try {
} catch (error) {
  console.log((error as CustomError).message); //eta korle auto suggestion dibe message ta
}
```

## Interface and Types in Array and Objects

- We can use type alias for primitive data as well.
- But Using Interface we can not define primitive type.
- If any Property Needs to be extended we should use interface
- Types are better to use for array
- Types are better to use for functions

#### So For all Primitives we will use type alias and for non primitive(object) we will use both type and interface.

```ts
type User1 = {
  name: string;
  age: number;
};

interface user2 {
  name: string;
  age: number;
}

type User3 = User1 & { role: string };

interface User4 extends user2 {
  role: string;
}
```

- js --> object , array --> object, function-->object

- Types are better to use for array

```ts
type Roll1 = number[];

// this is the reason why
interface Roll2 {
  [index: number]: number;
}

const rollNumber1: Roll1 = [1, 2, 3];

const rollNumber2: Roll2 = [1, 2, 3];

// interface in function

type Add1 = (num1: number, num2: number) => number;
// types are better to use for functions

interface Add2 {
  (num1: number, num2: number): number;
}

const add1: Add1 = (num1, num2) => num1 + num2;
```
