#ifndef SAVINGSACCOUNT_H
#define SAVINGSACCOUNT_H

#include "Account.h"

class SavingsAccount : public Account {
public:
    // Construtor
    SavingsAccount(int num, std::string hold, double bal);

    // Sobrescrevendo o método de saque
    void withdraw(double amount) override;
};

#endif
