{
  class BankAccount {
    public readonly id: number;
    public name: string;

    // private _balance: number;
    protected _balance: number;

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
  }

  class StudentAccount extends BankAccount {
    test() {
      this._balance;
    }
  }

  const goribManusherAccount = new BankAccount(111, "Mr.Gorib", 20);

  goribManusherAccount.addDeposit(300);
  const MyBalance = goribManusherAccount.getBalance();
  console.log(MyBalance);
}
