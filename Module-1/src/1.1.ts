{
  // Module-1-0
  // ### How To Install and Run ts
  // - Install Ts Globally
  // - Write "tsc index.ts" to convert the file in js
  // - Write "tsc Module-1/src/index.ts" to convert the file to js
  // - to configure the ts file we have to write "tsc --init"
  // - Change the Root Dir and Out Dir
  // - After This do not have run "tsc Module-1/src/index.ts" like this we just can write "tsc"
  // ## Basic Types Of Typescript Module-1
  // #### Js Types
  // 1. Number
  // 2. String
  // 3. Boolean
  // 4. Null
  // 5. Undefined
  // 6. Object
  // 7. Symbol
  // #### Ts Types
  // ##### Primitive
  // - Number
  // - String
  // - Boolean
  // - Null
  // - Undefined
  // - Symbol
  // - BigInt
  // ##### Non-Primitive
  // - Array
  // - Object
  // - Tuple
  // ##### Special Types
  // - any
  // - never
  // - unknown
  // - void
  // ##### Advanced Types
  // - Union
  // - Intersection
  // - Interfaces
  // - Enums
  // - Type Alias
  // ##### Advanced Types
  // - Type of Function
  // - Optional Parameter
  // - Default Parameter
  // - Arrow Function with Types

  //    implicit data types
  let firstName = "Sazid";

  //   explicit data types
  let lastName: String = "Sazid";

  //    Primitive Dta Types
  let age: number = 25;
  let isAdult: boolean = true;
  let x: null = null;
  let y: undefined = undefined;
  let z: symbol = Symbol("sazid");

  //   any type
  let d: any = 10;

  //   Non-Primitive
  let friends: string[] = ["sazid", "Shakil"];
  let eligibleRoleList: number[] = [1, 2, 3, 4, 5, 6];

  //   tuples

  let coordinates: [number, number] = [1, 14];

  let info: [number, string] = [12, "sazid"];
  let info1: [number, string, boolean] = [12, "sazid", true];

  //  though we can change the tuple in different way

  const originalTuple: [number, string] = [1, "Hello"];

  const newTuple = [...originalTuple, true];
}
