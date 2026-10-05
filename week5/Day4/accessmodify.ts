import { log } from "node:console";

// BankAccount.ts
export class BankAccount {
    // 1. Properties with different access modifiers
    public accountHolder: string;      // Accessible everywhere
    private balance: number;           // Accessible ONLY within BankAccount
    protected accountNumber: string;   // Accessible within BankAccount and its subclasses

    constructor(accountHolder: string, accountNumber: string, initialBalance: number) {
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }

    // 2. Methods to deposit and withdraw money
  public Depoist(amount:number):void{
    if(amount>0){
        this.balance += amount
        console.log(`Deposited ₹${amount}. New balance: ₹${this.balance}`)
    }
}
public Withdraw(amount:number):void{
    if(amount>0 && amount <=this.balance){
        this.balance -=amount
        console.log(`Withdrew ₹${amount}. Remaining balance: ₹${this.balance}`)
    }
    else{
        console.log('Insufficient balance')
    }

}
public getBalance():number{
    return this.balance

}
  }
