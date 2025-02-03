{
  // 1. Task: Create a Person object with properties for name (string), age (number), and isStudent (boolean).

  const person: {
    name: string;
    age: number;
    isStudent: boolean;
  } = {
    name: "sazid",
    age: 26,
    isStudent: true,
  };

  // 2. Task: Create an array of strings called favoriteFoods containing at least three food items.
  // Bonus: Create an array of numbers called scores and populate it with five numbers.

  const favoriteFoods: string[] = ["mango", "malta", "apple"];
  const scores: number[] = [1, 2, 3, 4, 5];

  // 3. Task: Create a tuple called book to represent a book with its title (string), author (string), and publicationYear (number).
  const book: [string, string, number] = ["Sazids", "saz", 123];

  // 4. Task: Create a variable called userId that can be either a number or a string. Assign both a number and a string to it to test.

  type UserId = number | string;
  const userId: UserId = "1234";

  // 5. Task: Create a type alias called Coordinates that represents an object with latitude and longitude as numbers. Then create a variable of type Coordinates and assign it appropriate values.

  type Coordinates = {
    latitude: Number;
    longitude: number;
  };

  const coordinates: Coordinates = {
    latitude: 123,
    longitude: 11123,
  };

  // 6. Task: Define an object type for Car with properties make (string), model (string), year (number), and isElectric (boolean). Create a variable of type Car and assign values to it.

  type Car = {
    make: string;
    model: string;
    year: number;
    isElectric: boolean;
  };

  const car: Car = {
    make: "s",
    model: "a",
    year: 123,
    isElectric: true,
  };

  // 7. Task: Create a function called add that takes two parameters, a and b, both of type number, and returns their sum.
  // Bonus: Create a function called introduce that takes a Person object (from task 1) as a parameter and returns a string introducing the person by name and age.

  const add = (a: number, b: number): number => {
    return a + b;
  };

  type Person = {
    name: string;
    age: number;
    isStudent: boolean;
  };
  const introduce = (param: Person): string => {
    return `Hi, my name is ${person.name} and I am ${person.age} years old.`;
  };

  // 8.Task: Create two types, User with properties username (string) and email (string), and Admin with an additional property isAdmin (boolean). Then create a type that combines User and Admin to represent an admin user. Create a variable of this combined type and assign appropriate values.

  type User = {
    userName: string;
    email: string;
  };

  type Admin = {
    isAdmin: boolean;
  };

  type UserType = User & Admin;

  const user: UserType = {
    userName: "sazid",
    email: "sazid@gmail.cm",
    isAdmin: false,
  };
}
