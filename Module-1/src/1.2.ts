{
  // ##### Functions In Typescript
  // Normal Function

  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  add(1, 2);

  //  Arrow Functions

  const addArrow = (num1: number, num2: number): number => num1 + num2;

  addArrow(1, 2);

  // Setting Default Value
  function add1(num1: number = 10, num2: number): number {
    return num1 + num2;
  }
  add1(1, 0);

  //   - If any object contains functions inside its called method

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

  //   more

  const array: number[] = [1, 2, 3, 4, 5];

  const newArray: number[] = array.map(
    (element: number): number => element * element
  );
}
