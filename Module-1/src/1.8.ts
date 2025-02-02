{
  //  Ternary Operator  an Optional Chaining Operator
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

  // Nullish Coalescing Operator
  //  If the situation is like we have to take decisions based on the null or undefined value, then we can use the nullish coalescing operator.
  const isAuthenticated = true;
  const result1 = isAuthenticated ?? "Guest";
  // The Nullish Coalescing Operator (??) checks if isAuthenticated is null or undefined.
  const result2 = isAuthenticated ? isAuthenticated : "Guest";

  console.log(result1, result2);
}
