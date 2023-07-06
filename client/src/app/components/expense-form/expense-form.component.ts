import { Component, EventEmitter, Output } from '@angular/core';
import { Expense } from '../../services/expense.service';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css']
})
export class ExpenseFormComponent {

  @Output() expenseAdded = new EventEmitter<Expense>(); // Event emitter to emit the newly added expense

  name = ''; // Variable to store the name of the expense
  amount = ''; // Variable to store the amount of the expense

   // Function to add an expense
  addExpense(): void {
    const expense: Expense = { name: this.name, amount: parseFloat(this.amount) };
    this.expenseAdded.emit(expense); // Emit the expenseAdded event with the new expense
    this.name = ''; // Reset the name field
    this.amount = ''; // Reset the amount field
  }
}
