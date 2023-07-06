import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Expense {
  name: string;
  amount: number;
}

export interface Payout {
  total: number;
  equalShare: number;
  payouts: Array<{ owes: string, owed: string, amount: number }>;
}

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private readonly apiUrl = 'http://localhost:5001';

  constructor(private http: HttpClient) { }

  calculatePayouts(expenses: Expense[]): Observable<Payout> {
    return this.http.post<Payout>(`${this.apiUrl}/payouts`, { expenses });
  }
}
