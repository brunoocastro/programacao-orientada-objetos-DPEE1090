#include "BusinessAccount.h"

// Construtor
BusinessAccount::BusinessAccount(int num, std::string hold, double bal, double loanLim)
    : Account(num, hold, bal), loanLimit(loanLim) {}

// Método Get
double BusinessAccount::getLoanLimit() const {
    return loanLimit;
}

// Método Set
void BusinessAccount::setLoanLimit(double loanLim) {
    loanLimit = loanLim;
}

// Método para empréstimo
void BusinessAccount::loan(double amount) {
    if (amount > 0 && amount <= loanLimit) {
        deposit(amount);
    }
}
