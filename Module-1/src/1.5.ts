{
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
}
