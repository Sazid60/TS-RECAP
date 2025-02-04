{
  // Encapsulation means amr theke hide kora mane birer world er kase jno access na thake

  class BankAccount {
    public readonly id: number;
    public name: string;
    private _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
    public addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

    public getBalance() {
      return this._balance;
    }
    getHiddenMethod() {
      return this.getBalance();
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      this.getHiddenMethod();
    }
  }

  const goribAccount = new BankAccount(111, "Goribs", 20);

  goribAccount.addDeposit(20);
  const myBalance = goribAccount.getBalance();
  console.log(myBalance);
}
