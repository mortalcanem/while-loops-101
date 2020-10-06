/* Problem: Account Balance
Write a function to calculate an account balance
▪ Receives a sequence of incomes / expenses, until "End" is
read
▪ Adds the money to the balance (starting from 0) and print
"Increase: {money} " or "Decrease: {money}"
▪ Finally, prints the account balance (like shown below) */

function accountBalance(lines) {
  let balance = 0;
  let line = lines.shift();
  while (line !== 'End' && line !== undefined) {
  let amount = Number(line);
  balance += amount;
// TODO: Print Increase / Decrease line = lines.shift();
}

console.log(`Balance: ${balance.toFixed(2)}`); }

accountBalance(['500', '15.5', '80.35', 'End']);

/// alternate solution using a different while loop. Passes Hw checker. Module 1 14.6 lab

function main(lines) {
    var balance = 0;
    var transaction = lines.shift();
    while (transaction != "End") {
        var amount = Number(transaction);
        if (transaction > 0) {
            console.log(`Increase: ${amount.toFixed(2)}`);
            balance += amount;
        } else {
            console.log(`Decrease: ${Math.abs(amount).toFixed(2)}`);
            balance -= Math.abs(amount);
        }
        transaction = lines.shift();
    }
    console.log("Balance: " + balance.toFixed(2));
}
