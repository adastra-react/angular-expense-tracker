import { calculatePayouts } from '../payoutService';

describe('PayoutService', () => {
  it('should calculate payouts correctly', () => {
    const expenses = [
      { name: "Adriana", amount: 5.75 },
      { name: "Adriana", amount: 5.75 },
      { name: "Bao", amount: 12 }
    ];
    const result = calculatePayouts(expenses);
    expect(result.total).toBe(23.5);
    expect(result.equalShare).toBe(7.833333333333333);
    expect(result.payouts.length).toBe(2);
  });
});