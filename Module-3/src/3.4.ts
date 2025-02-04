{
  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound() {
      console.log("I am Making Sound");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeBark() {
      console.log("I am Barking");
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeMew() {
      console.log("I am Mewaing");
    }
  }

  //   const getAnimal = (animal: Animal) => {
  //     if (animal instanceof Dog) {
  //       animal.makeBark();
  //     } else if (animal instanceof Cat) {
  //       animal.makeMew();
  //     } else {
  //       animal.makeSound();
  //     }
  //   };

  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };
  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  const getAnimal = (animal: Animal) => {
    // smart way
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMew();
    } else {
      animal.makeSound();
    }
  };

  const dog = new Dog("Dog Bhai", "dog");
  dog.makeBark();
  const cat = new Cat("Cat Bhai", "Cat");
  cat.makeMew();

  getAnimal(dog);
}
