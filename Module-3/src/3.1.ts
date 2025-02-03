{
  // Class and Objects

  //   OOp Class

  //   class Animal {
  //     public name: string;
  //     public species: string;
  //     public sound: string;

  //     constructor(name: string, species: string, sound: string) {
  //       this.name = name;
  //       this.species = species;
  //       this.sound = sound;
  //     }

  //     makeSound() {
  //       console.log(`The ${this.name} says ${this.sound}`);
  //     }
  //   }

  class Animal {
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}

    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  const dog = new Animal("Kutta", "Bangla", "Gew Gew");
  console.log(dog.sound);
  dog.makeSound();
  const cat = new Animal("Bilai", "Deshi", "Mew Mew");
  console.log(cat.species);
  cat.makeSound();
}
