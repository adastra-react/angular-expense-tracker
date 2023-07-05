function calculatePayouts(expenses) {
    const total = expenses.reduce((total, expense) => total + expense.amount, 0);
    const equalShare = total / expenses.length;

    let payouts = [];

    // Calculate who owes money and how much
    for (let i = 0; i < expenses.length; i++) {
        if (expenses[i].amount < equalShare) {
            for (let j = 0; j < expenses.length; j++) {
                if (expenses[j].amount > equalShare) {
                    let amountOwed = Math.min(equalShare - expenses[i].amount, expenses[j].amount - equalShare);
                    expenses[i].amount += amountOwed;
                    expenses[j].amount -= amountOwed;
                    payouts.push({ owes: expenses[i].name, owed: expenses[j].name, amount: amountOwed });
                    if (expenses[i].amount >= equalShare) {
                        break;
                    }
                }
            }
        }
    }

    return { total, equalShare, payouts };
}

module.exports = {
    calculatePayouts
};
