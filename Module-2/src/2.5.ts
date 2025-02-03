{
  // Normal Function
  const createArray = (param: string): string[] => {
    return [param];
  };

  const res1 = createArray("Bangladesh");

  // using generics
  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res2 = createArrayWithGeneric<string>("Bangladesh");

  type User = {
    id: number;
    name: string;
  };
  const res3 = createArrayWithGeneric<User>({ id: 123, name: "sazid" });

  // generics with Tuple

  const createArrayWithGenericTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res4 = createArrayWithGenericTuple<string, number>("Bangladesh", 123);

  type User1 = {
    id: number;
    name: string;
  };
  const res5 = createArrayWithGenericTuple<string, User1>("Bangladesh", {
    id: 123,
    name: "sazid",
  });

  // adding something new to an object
  const addCourseToStudent = <T>(student: T) => {
    const course: string = "Next Level Web Dev";

    return {
      ...student,
      course,
    };
  };

  interface Student {
    id: number;
    name: string;
    email: string;
    devType: string;
  }

  const student1 = addCourseToStudent<Student>({
    id: 123,
    name: "Mr X",
    email: "x@gmail.com",
    devType: "new",
  });

  interface Student1 {
    id: number;
    name: string;
    email: string;
    devType: string;
    hasWatch: boolean;
  }

  const student2 = addCourseToStudent<Student1>({
    id: 123,
    name: "Mr X",
    email: "x@gmail.com",
    devType: "new",
    hasWatch: true,
  });
}
