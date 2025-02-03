{
  // interface and type vs interface
  type User1 = {
    name: string;
    age: number;
  };

  interface User2 {
    name: string;
    age: number;
  }

  type userWithRole1 = User1 & { role: string };
  // intersection types

  type userWithRole2 = User2 & { role: string };

  interface userWithRole3 extends User1 {
    role: string;
  }

  interface userWithRole4 extends User2 {
    role: string;
  }

  const user1: User1 = {
    name: "sazid",
    age: 100,
  };
  const user2: User2 = {
    name: "sazid",
    age: 100,
  };
  const user3: userWithRole1 = {
    name: "sazid",
    age: 100,
    role: "admin",
  };
  const user4: userWithRole2 = {
    name: "sazid",
    age: 100,
    role: "admin",
  };
  const user5: userWithRole3 = {
    name: "sazid",
    age: 100,
    role: "admin",
  };
  const user6: userWithRole4 = {
    name: "sazid",
    age: 100,
    role: "admin",
  };

  // interface and types in array and objects

  // js --> object , array --> object, function-->object

  type Roll1 = number[];
  // types are better to use for array

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
}
