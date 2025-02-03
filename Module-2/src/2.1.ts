{
  //  Type assertion : Nije theke bole dilam ki hobe type ta

  let anything: any;

  anything = 123;
  (anything as number).toFixed;

  anything = "next Dev";

  (anything as string).includes;

  // another example

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The Value is : ${convertedValue}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const res1 = kgToGm(1000) as number;

  const res2 = kgToGm("1000") as string;

  // example using custom types

  type CustomError = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as CustomError).message); //eta korle auto suggestion dibe message ta
  }
}
