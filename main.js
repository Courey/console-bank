var accountActive = true;
var balance = 1000;
var amount = 0;

while (accountActive){
  var type = transactionType();

  switch (type){
  case 'd':
    getTransactionAmt();
    deposit(amount);
    getBalance(balance);
    amount = 0;
    break;

  case 'w':
    getTransactionAmt();
    testBalance(balance, amount);
    getBalance(balance);
    break;

  default:
    console.log('invalid input. click refresh and do it right.');
  }// end switch
}// end while loop

function transactionType(){ // prompts for transaction type
  var transactionType = prompt('What type of transaction would you like? (d)eposit or (w)ithdrawl');
  return transactionType.toLowerCase();
}

function getTransactionAmt(){ // prompts for transaction amount
  var input = prompt('Enter transaction amount.');
  amount = input * 1;
  return amount;
}

function deposit(x){ // adds deposit to balance
  if(x >= 500){
    var deposit = x + 25;
    balance += deposit;
    return balance;
  }
  else{
    var deposit = x;
    balance += deposit;
    return balance;
  }
}

function testBalance(x, y){ // tests to see what the balance is after withdrawl
  var remainingBalance = x - y;
  if(remainingBalance >= 0){
    balance = remainingBalance;
    amount = 0;
    return balance;
  }
  else if(remainingBalance < 0 && remainingBalance > -750){
    balance = remainingBalance - 50;
    amount = 0;
    return balance;
  }
  else{
    accountActive = false;
    console.log('your account has been deactivated.');
  }
}

function getBalance(x){
  if (accountActive !== false){
    console.log('Your current ballance is: ' + x);
  }
}
