{
  //   class Counter {
  //     count: number = 0;
  //     increment() {
  //       return (this.count = this.count + 1);
  //     }
  //     decrement() {
  //       return (this.count = this.count - 1);
  //     }
  //   }
  //   const instance1 = new Counter();
  //   console.log(instance1.increment()); //1 -> different memory
  //   const instance2 = new Counter();
  //   console.log(instance1.increment()); //1 --> different memory

  // if we want to make the method static
  class Counter {
    static count: number = 0;
    static increment() {
      return (Counter.count = Counter.count + 1);
    }
    static decrement() {
      return (Counter.count = Counter.count - 1);
    }
  }

  console.log(Counter.increment());

  console.log(Counter.increment());
}
