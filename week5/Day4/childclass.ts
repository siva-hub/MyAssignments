// SavingsAccount.ts
import {BankAccount} from '../week5/accessmodify'
export class SavingsAccount extends BankAccount{
    private interestRate:number
    constructor(accountHolder: string, accountNumber: string, initialBalance: number, interestRate: number) {
        super(accountHolder, accountNumber, initialBalance);
        this.interestRate = interestRate;
    }
   public printAccountDetails(): void {
        // 1. PUBLIC property: Accessible
        console.log(`Holder: ${this.accountHolder}`); 

        // 2. PROTECTED property: Accessible inside child class
        console.log(`Account Number: ${this.accountNumber}`); 

        // 3. PRIVATE property: NOT accessible directly inside child class
        // console.log(`Balance: ${this.balance}`); 
        // TS COMPILER ERROR: Property 'balance' is private and only accessible within class 'BankAccount'.

        // Workaround for private: Use inherited public method
        console.log(`Balance (via getter): ₹${this.getBalance()}`);
    }
}

// Test child class execution:
const savings = new SavingsAccount("Siva", "SAV998877", 10000, 4.5);
savings.printAccountDetails();

