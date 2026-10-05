// main.ts
import { BankAccount } from '../week5/accessmodify';

const BA = new BankAccount("siva","AE2026",5000)

console.log(BA.accountHolder)


BA.Depoist(2000)
BA.Withdraw(1000)
