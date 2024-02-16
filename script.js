function BankAccount(accountNumber, name, type, balance) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.active = true; // Set account active by default
}

// Methods added to the BankAccount prototype
BankAccount.prototype.deposit = function(amount) {
    this.balance += amount;
    console.log(`Deposited ${amount} into account ${this.accountNumber}.`);
}

BankAccount.prototype.withdraw = function(amount) {
    if (this.balance >= amount) {
        this.balance -= amount;
        console.log(`Withdrawn ${amount} from account ${this.accountNumber}.`);
    } else {
        console.log(`Insufficient balance in account ${this.accountNumber}.`);
    }
}

BankAccount.prototype.checkBalance = function() {
    console.log(`Balance in account ${this.accountNumber}: ${this.balance}`);
}

BankAccount.prototype.isActive = function() {
    return this.active;
}

// Function to calculate total balance of all active accounts
function getTotalBalance(accounts) {
    let totalBalance = 0;
    accounts.forEach(function(account) {
        if (account.isActive()) {
            totalBalance += account.balance;
        }
    });
    return totalBalance;
}

// Create multiple BankAccount objects
const account1 = new BankAccount(123456, 'John Doe', 'Savings', 1000);
const account2 = new BankAccount(789012, 'Jane Smith', 'Checking', 2000);

// Test deposit, withdrawal, and balance check operations
account1.deposit(500);
account1.checkBalance();
account1.withdraw(200);
account1.checkBalance();

account2.deposit(1000);
account2.checkBalance();
account2.withdraw(500);
account2.checkBalance();

// Test isActive method
console.log(`Account 1 active status: ${account1.isActive()}`);
console.log(`Account 2 active status: ${account2.isActive()}`);

// Test getTotalBalance function
const accounts = [account1, account2];
const totalBalance = getTotalBalance(accounts);
console.log(`Total balance of all active accounts: ${totalBalance}`);