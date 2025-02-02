{
  // Nullable Types

  const searchName = (value: string | null) => {
    if (value) {
      console.log("Searching");
    } else {
      console.log("there is nothing to search");
    }
  };
  searchName(null);

  // unknown Type

  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The Speed is ${convertedSpeed} ms^-1 `);
    } else if (typeof value === "string") {
      const [result, unit] = value.split(" ");
      const convertedSpeed = (parseFloat(result) * 1000) / 3600;
      console.log(`The Speed is ${convertedSpeed} ms^-1 `);
      console.log(result);
    } else {
      console.log("Wrong Input");
    }
  };

  getSpeedInMeterPerSecond(1000);
  getSpeedInMeterPerSecond(`1000 kmh^-1`);

  // never type
  const throwError = (msg: string): never => {
    throw new Error(msg);
  };
  throwError("Bap re bap Error hOi gelo");
}
