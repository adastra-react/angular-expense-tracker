import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ExpenseFormComponent } from '../app/components/expense-form/expense-form.component';

describe('ExpenseFormComponent', () => {
  let component: ExpenseFormComponent;
  let fixture: ComponentFixture<ExpenseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ ExpenseFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit an expenseAdded event when addExpense is called', () => {
    spyOn(component.expenseAdded, 'emit');
    const testExpense = { name: 'Test', amount: 100 };
    component.name = testExpense.name;
    component.amount = testExpense.amount.toString();
    component.addExpense(); // Manually call the method
    expect(component.expenseAdded.emit).toHaveBeenCalledWith(testExpense);
  });  

  it('should not emit an expenseAdded event when the name contains a number', () => {
    spyOn(component.expenseAdded, 'emit');
    component.name = 'Test1';
    component.amount = '100';
    const button = fixture.debugElement.query(By.css('.add-expense-button'));
    button.triggerEventHandler('click', null);
    expect(component.expenseAdded.emit).not.toHaveBeenCalled();
  });

  it('should not emit an expenseAdded event when the amount contains a letter', () => {
    spyOn(component.expenseAdded, 'emit');
    component.name = 'Test';
    component.amount = '100a';
    const button = fixture.debugElement.query(By.css('.add-expense-button'));
    button.triggerEventHandler('click', null);
    expect(component.expenseAdded.emit).not.toHaveBeenCalled();
  });

  it('should not emit an expenseAdded event when the name or amount is empty', () => {
    spyOn(component.expenseAdded, 'emit');
    component.name = '';
    component.amount = '';
    const button = fixture.debugElement.query(By.css('.add-expense-button'));
    button.triggerEventHandler('click', null);
    expect(component.expenseAdded.emit).not.toHaveBeenCalled();
  });
});
