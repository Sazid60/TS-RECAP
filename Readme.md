# Recap Mission-1

### How To Install and Run ts

- Install Ts Globally
- Write "tsc index.ts" to convert the file in js
- Write "tsc Module-1/src/index.ts" to convert the file to js
- to configure the ts file we have to write "tsc --init"
- Change the Root Dir and Out Dir
- After This do not have run "tsc Module-1/src/index.ts" like this we just can write "tsc"

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
