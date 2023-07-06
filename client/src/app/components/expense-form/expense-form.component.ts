import { Component, EventEmitter, Output } from '@angular/core';
import { Expense } from '../../services/expense.service';
import * as Toastify from 'toastify-js'; // Import as namespace

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
    // Additional validation logic
    const nameContainsNumber = /\d/.test(this.name); // Check if the name contains a digit
    const amountContainsLetter = /[a-zA-Z]/.test(this.amount); // Check if the amount contains a letter

    if (nameContainsNumber) {
            Toastify({
            text: 'Name should not contain numbers.',
            className: 'toastify-error',
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "#FFBF00",
        },
      }).showToast();
      return; // Exit the function if the name contains a number
    }

    if (amountContainsLetter) {
      Toastify({
        text: 'Amount should not contain letters.',
        className: 'toastify-error',
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "#FFBF00",
    },
  }).showToast();
      return; // Exit the function if the amount contains a letter
    }

    if (!this.name || !this.amount) {
      Toastify({
        text: 'Name and amount are required.',
        className: 'toastify-error',
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "#FFBF00",
    },
  }).showToast();
      return; // Exit the function if name or amount is empty
    }

    // If all validations pass, create the expense and emit the expenseAdded event
    const expense: Expense = { name: this.name, amount: parseFloat(this.amount) };
    this.expenseAdded.emit(expense);
    this.name = ''; // Reset the name field
    this.amount = ''; // Reset the amount field
  }
}
