{
  // constrains
  // adding something new to an object
  const addCourseToStudent = <
    T extends { id: number; name: string; email: string; devType: string }
  >(
    student: T
  ) => {
    // this means the mentioned property should be present do not care about others
    const course = "Next Level Web Dev";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    id: 123,
    name: "Mr X",
    email: "x@gmail.com",
    devType: "new",
  });

  const student2 = addCourseToStudent({
    id: 123,
    name: "Mr X",
    email: "x@gmail.com",
    devType: "new",
    hasWatch: true,
  });
}

{
  // generic constraint with keyof operator

  // jokhon utility diye kisu akta mandatory kore dite hobe tokhon eta use korbo

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; //manually

  type Owner2 = keyof Vehicle;

  const person1: Owner2 = "ship";
  // dekhbo auto suggestion ditye dise

  // another example
  // mane Y er vitore X er key gula rakhbe
  const getPropertyValue = <X, Y extends keyof X>(objs: X, key: Y) => {
    // keyof X represents all the keys of the type X (i.e., it produces a union of the keys of X)
    return objs[key];
  };

  const user = {
    name: "sazid",
    age: 100,
    address: "dhk",
  };

  const car = {
    model: "Toyota",
    year: 2000,
  };

  const result1 = getPropertyValue(user, "name");
  const result2 = getPropertyValue(car, "model");

  // obj[key]
}
