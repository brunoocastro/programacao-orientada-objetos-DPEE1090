#ifndef BUSINESSACCOUNT_H
#define BUSINESSACCOUNT_H

#include "Account.h"

class BusinessAccount : public Account {
private:
    double loanLimit;

public:
    // Construtor
    BusinessAccount(int num, std::string hold, double bal, double loanLim);

    // Método Get
    double getLoanLimit() const;

    // Método Set
    void setLoanLimit(double loanLim);

    // Método para empréstimo
    void loan(double amount);
};

#endif
