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

## Data Types Deep Understanding-1-1

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
