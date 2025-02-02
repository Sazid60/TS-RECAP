{
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

  //    Rest Operator
  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`Hello, ${friend}`));
  };

  greetFriends("Sazid", "Shahnawaz", "Aura", "Shahin", "Sakib");

  //    more

  const fruits = ["Apple", "Banana", "Mango", "Grapes"];

  const [firstFruit, secondFruit, ...remainingFruits] = fruits;

  console.log(firstFruit); // Output: Apple
  console.log(secondFruit); // Output: Banana
  console.log(remainingFruits); // Output: ["Mango", "Grapes"]

  //   more

  const user = {
    name: "Shahnawaz",
    age: 30,
    country: "India",
    profession: "Developer",
  };

  const { name, ...otherDetails } = user;

  console.log(name); // Output: Shahnawaz
  console.log(otherDetails); // Output: { age: 30, country: 'India', profession: 'Developer' }
}
