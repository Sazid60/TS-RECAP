{
  // Abstraction
  // real jinish ta janbo na but idea pabo jinish ta ki hoite pare

  // abstractin 2 vabe kora jay
  // interface bebohar kore
  // Abstract class bebohar kore

  // ______________________________using interface
  // idea
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  // real implementation
  // class jodi kuno structure follow korte cay tahle implements use korbo
  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log("I am starting engine");
    }
    stopEngine(): void {
      console.log("I am stopping the car engine");
    }
    move(): void {
      console.log("I am moving");
    }
    test() {
      console.log("I am just testing");
    }
  }

  const toyotaCar = new Car1();
  toyotaCar.startEngine();

  // ______________________________using abstract class

  // abstract class k leader class bole [emon akta class banabo jeta re bakli class follow korbe]

  // abstract class ami follow korte parbo but tar theke toiri korte parbo na
  // abstract class theke instance toiri hoy na
  // follow korte hoile extends use korte hobe

  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test() {
      console.log("I am just testing");
    }
  }

  class ToyotaCar extends Car2 {
    startEngine(): void {
      console.log("I am starting engine");
    }
    stopEngine(): void {
      console.log("I am stopping the car engine");
    }
    move(): void {
      console.log("I am moving");
    }
  }
  // const hondCar = new Car2()
  // hondCar.startEngine() // cant do this

  // we can do this
  const hondCar2 = new ToyotaCar();
  hondCar2.startEngine();
}
