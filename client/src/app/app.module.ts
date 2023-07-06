// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { ExpensesListComponent } from './components/expenses-list/expenses-list.component';
// import { ExpenseFormComponent } from './components/expense-form/expense-form.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     ExpensesListComponent,
//     ExpenseFormComponent
//   ],
// imports: [
//     BrowserModule,
//     HttpClientModule,
//     FormsModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ExpensesListComponent } from './components/expenses-list/expenses-list.component';
import { ExpenseFormComponent } from './components/expense-form/expense-form.component';

const routes: Routes = [
  // Define your routes here. For example:
  { path: '', component: ExpensesListComponent },
  // If you want to add routes to the expense form, uncomment the following line:
  // { path: 'expense-form', component: ExpenseFormComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ExpensesListComponent,
    ExpenseFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
