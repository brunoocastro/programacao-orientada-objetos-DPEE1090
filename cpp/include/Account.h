#ifndef ACCOUNT_H
#define ACCOUNT_H

#include <string>

class Account
{
private:
  int number;
  std::string holder;
  double balance;

public:
  // Construtor
  Account(int num, std::string hold, double bal);

  // Métodos Get
  int getNumber() const;
  std::string getHolder() const;
  double getBalance() const;

  // Métodos Set (apenas para holder, number não deve ser alterado)
  void setHolder(const std::string &hold);

  // Métodos para alterar balance
  void deposit(double amount);
  void virtual withdraw(double amount);
};

#endif
