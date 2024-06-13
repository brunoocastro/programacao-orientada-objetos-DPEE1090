#include "SavingsAccount.h"

// Construtor
SavingsAccount::SavingsAccount(int num, std::string hold, double bal)
    : Account(num, hold, bal) {}

// Sobrescrevendo o método de saque
void SavingsAccount::withdraw(double amount) {
    const double fee = amount * 0.02;
    if (amount > 0 && (amount + fee) <= getBalance()) {
        Account::withdraw(amount + fee);
    }
}
