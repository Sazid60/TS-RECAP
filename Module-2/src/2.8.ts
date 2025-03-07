{
  // conditional types
  type a1 = null;
  type b1 = undefined;

  type x = a1 extends null ? true : false; //conditional type

  type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
  };

  // car/bike/ship/ tractor ase ki na
  type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

  // It checks if T (the input type) is a key of an object type called Sheikh

  type HasBike = CheckVehicle<"bike">;
}
