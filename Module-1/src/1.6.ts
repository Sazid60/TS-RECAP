{
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
}
