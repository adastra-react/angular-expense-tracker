function calculatePayouts(expenses) {
    // Calculate the total amount of expenses
    const total = expenses.reduce((total, expense) => total + expense.amount, 0);
  
    // Calculate the equal share amount per person
    const equalShare = expenses.length > 0 ? total / expenses.length : 0;
  
    // Initialize an array to store the payouts
    let payouts = [];
  
    // Calculate who owes money and how much
    for (let i = 0; i < expenses.length; i++) {
      if (expenses[i].amount < equalShare) {
        for (let j = 0; j < expenses.length; j++) {
          if (expenses[j].amount > equalShare) {
            // Calculate the amount owed between two persons
            let amountOwed = Math.min(equalShare - expenses[i].amount, expenses[j].amount - equalShare);
  
            // Adjust the expense amounts accordingly
            expenses[i].amount += amountOwed;
            expenses[j].amount -= amountOwed;
  
            // Add the payout details to the payouts array
            payouts.push({ owes: expenses[i].name, owed: expenses[j].name, amount: amountOwed });
  
            // Check if the owed amount is covered by the owing person's expenses
            if (expenses[i].amount >= equalShare) {
              break; // No need to continue calculating payouts for the current owing person
            }
          }
        }
      }
    }
  
    // Return the calculated total, equal share, and payouts
    return { total, equalShare, payouts };
  }
  
  module.exports = {
    calculatePayouts
  };
  