import { Component } from '@angular/core';
import { Expense, ExpenseService, Payout } from '../../services/expense.service';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css']
})
export class ExpensesListComponent {

  expenses: Expense[] = []; // Array to store the list of expenses
  payouts: Payout | null = null; // Variable to store the calculated payouts

  constructor(private expenseService: ExpenseService) { }

   // Function to handle adding an expense to the list
  addExpense(expense: Expense): void {
    this.expenses.push(expense);
  }

  // Function to settle up and calculate the payouts
  settleUp(): void {
    this.expenseService.calculatePayouts(this.expenses).subscribe(payouts => {
      this.payouts = payouts;
    });
  }
}
