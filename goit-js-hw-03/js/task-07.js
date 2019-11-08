'use strict';
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

let transaction = {};

const account = {
  balance: 0,

  TransactionID: 123321987,

  transactions: [],

  deposit(amount) {
    this.balance += Number(amount);
    this.TransactionID += Number(amount);
    transaction = { type: Transaction.DEPOSIT, amount: amount, id: this.TransactionID };
    this.addTransaction(transaction);
  },

  withdraw(amount) {
    if (amount > this.balance) {
      alert('Суммы на вашем счету недостаточно для осуществления операции.');
    } else {
      this.balance -= Number(amount);
      this.TransactionID += Number(amount);
      transaction = { type: Transaction.WITHDRAW, amount: amount, id: this.TransactionID };
      this.addTransaction(transaction);
    }
  },

  addTransaction(transaction) {
    this.transactions.push(transaction);
  },

  getBalance() {
    console.log(`Баланс на счету: ${this.balance}`);
  },

  getTransactionDetails(id) {
    for (const item of this.transactions) {
      if (item.id == id) {
        console.log(item);
        return;
      }
    }
  },

  getTransactionTotal(type) {
    let total = 0;
    for (const item of this.transactions) {
      if (type === item.type) {
        total += item.amount;
      }
    }
    return console.log(`${type} : ${total}`);
  },
};

// Проверка методоа обьекта account

account.deposit(1000);

account.withdraw(700);

account.getBalance();

account.getTransactionDetails(123322987);

account.deposit(2000);

account.getBalance();

account.getTransactionTotal('withdraw');

console.table(account.transactions);
