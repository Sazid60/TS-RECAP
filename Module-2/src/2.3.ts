{
  // generics types

  // type GenericArray = Array<string>
  type GenericArray<T> = Array<T>;

  //
  const rollNumbers1: number[] = [1, 2, 3, 4];

  // const rollNumbers: Array<number> = [1, 2, 3, 4]
  const rollNumbers: GenericArray<number> = [1, 2, 3, 4];

  //
  const mentors1: string[] = ["a", "z", "a", "d"];

  // const mentors: Array<string> = ['a', 'z', 'a', 'd']
  const mentors: GenericArray<string> = ["a", "z", "a", "d"];

  //
  const boolArray1: boolean[] = [true, false, true];

  // const boolArray: Array<boolean> = [true, false, true]
  const boolArray: GenericArray<boolean> = [true, false, true];

  // const add = (x: number, y: number) => x + y

  // add(1,2)

  // generic array of object
  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "sazid",
      age: 100,
    },
    {
      name: "sazid",
      age: 100,
    },
    {
      name: "sazid",
      age: 100,
    },
  ];

  // generic tuple

  type GenericTuple<x, y> = [x, y];

  const manush: GenericTuple<string, string> = ["x-men", "x-women"];

  const userWithId: GenericTuple<number, { name: string; email: string }> = [
    123,
    { name: "saziid", email: "s@gmail.com" },
  ];

  // Generics with interface

  interface User {
    name: string;
    age: number;
  } // eta type diyeo korte pari

  // generic array of object
  const user1: GenericArray<User> = [
    {
      name: "sazid",
      age: 100,
    },
    {
      name: "sazid",
      age: 100,
    },
    {
      name: "sazid",
      age: 100,
    },
  ];
}
