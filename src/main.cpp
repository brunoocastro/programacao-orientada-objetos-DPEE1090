#include <iostream>
#include "Account.h"
#include "BusinessAccount.h"

int main() {
    // Criação de uma conta padrão
    Account account1(12345, "John Doe", 1000.0);
    std::cout << "Account Number: " << account1.getNumber() << std::endl;
    std::cout << "Account Holder: " << account1.getHolder() << std::endl;
    std::cout << "Account Balance: $" << account1.getBalance() << std::endl;

    // Criação de uma conta empresarial
    BusinessAccount businessAccount1(67890, "Jane Doe", 2000.0, 5000.0);
    std::cout << "\nBusiness Account Number: " << businessAccount1.getNumber() << std::endl;
    std::cout << "Business Account Holder: " << businessAccount1.getHolder() << std::endl;
    std::cout << "Business Account Balance: $" << businessAccount1.getBalance() << std::endl;
    std::cout << "Business Account Loan Limit: $" << businessAccount1.getLoanLimit() << std::endl;

    // Realizando um empréstimo
    businessAccount1.loan(1000.0);
    std::cout << "After loan, Business Account Balance: $" << businessAccount1.getBalance() << std::endl;

    // Tentando um empréstimo maior que o limite
    businessAccount1.loan(6000.0);
    std::cout << "After trying to exceed loan limit, Business Account Balance: $" << businessAccount1.getBalance() << std::endl;

    return 0;
}
