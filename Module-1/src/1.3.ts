{
  // ##### Object Optional and Literal Types

  const user: {
    firstName: string;
    lastName: string;
    middleName?: string;
  } = {
    firstName: "Sazid",
    lastName: "Shahnawaz",
    middleName: "Aura",
  };

  // literal types

  const user1: {
    company: "PH";
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
    readonly company: string;
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
}
