#include "Account.h"

// Construtor
Account::Account(int num, std::string hold, double bal) : number(num), holder(hold), balance(bal) {}

// Métodos Get
int Account::getNumber() const {
    return number;
}

std::string Account::getHolder() const {
    return holder;
}

double Account::getBalance() const {
    return balance;
}

// Métodos Set
void Account::setHolder(const std::string &hold) {
    holder = hold;
}

// Métodos para alterar balance
void Account::deposit(double amount) {
    if (amount > 0) {
        balance += amount;
    }
}

void Account::withdraw(double amount) {
    if (amount > 0 && amount <= balance) {
        balance -= amount;
    }
}
