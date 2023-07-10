import { calculatePayouts } from '../payoutService';

describe('PayoutService', () => {
  it('should calculate payouts correctly', () => {
    // Define the test data
    const expenses = [
      { name: "Adriana", amount: 5.75 },
      { name: "Adriana", amount: 5.75 },
      { name: "Bao", amount: 12 }
    ];

    // Call the function under test
    const result = calculatePayouts(expenses);

    // Assert the expected results
    expect(result.total).toBe(23.5); // Check the total amount
    expect(result.equalShare).toBeCloseTo(7.83); // Use toBeCloseTo for floating-point comparisons
    expect(result.payouts.length).toBe(2); // Check the number of payouts
  });

  it('should return empty payouts if expenses array is empty', () => {
    // Define the test data
    const expenses = [];

    // Call the function under test
    const result = calculatePayouts(expenses);

    // Assert the expected results
    expect(result.total).toBe(0); // Check that the total amount is 0
    expect(result.equalShare).toBe(0); // Check that the equal share is 0
    expect(result.payouts.length).toBe(0); // Check that there are no payouts
  });

  it('should handle single expense correctly', () => {
    // Define the test data
    const expenses = [{ name: "Adriana", amount: 10 }];

    // Call the function under test
    const result = calculatePayouts(expenses);

    // Assert the expected results
    expect(result.total).toBe(10); // Check the total amount
    expect(result.equalShare).toBe(10); // Check that the equal share is equal to the expense amount
    expect(result.payouts.length).toBe(0); // Check that there are no payouts
  });

  it('should handle equal shares without any payouts', () => {
    // Define the test data
    const expenses = [
      { name: "Adriana", amount: 5 },
      { name: "Bao", amount: 5 }
    ];

    // Call the function under test
    const result = calculatePayouts(expenses);

    // Assert the expected results
    expect(result.total).toBe(10); // Check the total amount
    expect(result.equalShare).toBe(5); // Check the equal share
    expect(result.payouts.length).toBe(0); // Check that there are no payouts
  });
});
