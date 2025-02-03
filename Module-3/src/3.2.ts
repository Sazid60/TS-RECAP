{
  // inheritance
  // jokhon amra kuno kisu parents theke pabo tokhon tare inheritance bole
  // kuno akta class er property ba method onno akta class pele tare inheritance bole
  // bangla niom
  //   class Student {
  //     name: string;
  //     age: number;
  //     address: string;
  //     constructor(name: string, age: number, address: string) {
  //       this.name = name;
  //       this.age = age;
  //       this.address = address;
  //     }
  //     getSleep(numOfHours: number) {
  //       console.log(`${this.name} will sleep for ${numOfHours}`);
  //     }
  //   }
  //   const student1 = new Student("Mr. Sazid", 20, "uganda");
  //   student1.getSleep(20);
  //   class Teacher {
  //     name: string;
  //     age: number;
  //     address: string;
  //     designation: string;
  //     constructor(
  //       name: string,
  //       age: number,
  //       address: string,
  //       designation: string
  //     ) {
  //       this.name = name;
  //       this.age = age;
  //       this.address = address;
  //       this.designation = designation;
  //     }
  //     getSleep(numOfHours: number) {
  //       console.log(`${this.name} will sleep for ${numOfHours}`);
  //     }
  //     takeClass(numOfClass: number) {
  //       console.log(`${this.name} will take ${numOfClass}`);
  //     }
  //   }
  //   const teacher1 = new Teacher("Mr. Sazid", 20, "uganda", "Professor");
  //   teacher1.getSleep(20);
  //   teacher1.takeClass(10);

  // using inheritance
  class Parent {
    // name: string;
    // age: number;
    // address: string;

    constructor(
      public name: string,
      public age: number,
      public address: string
    ) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours}`);
    }
  }
  // tumi tumar abbu k use koro
  class Student extends Parent {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
      // child constructor theke parent er constructor er kase value gula pathabo er maddhom holo super(). karon parent er constructor e hoilo asol malik
    }
  }

  const student1 = new Student("Mr. Sazid", 20, "uganda");
  student1.getSleep(20);

  class Teacher extends Parent {
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    takeClass(numOfClass: number) {
      console.log(`${this.name} will take ${numOfClass}`);
    }
  }

  const teacher1 = new Teacher("Mr. Sazid", 20, "uganda", "Professor");
  teacher1.getSleep(20);
  teacher1.takeClass(10);
}
