import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-budget';

  modal = false;

  transactionList = [{description: '',
  amount: 0,
  type: '',
  category: ''}];

  budget = {
    description: '',
    amount: 0,
    type: 'income',
    category: 'default'
  }

  totalBalance = 0;
  totalIncome = 0;
  totalExpense = 0;

  save() {
    this.modal = false;

    console.log(this.budget)

    if (this.budget.type == "income") {
      this.totalBalance += this.budget.amount
      this.totalIncome += this.budget.amount
    } else {
      this.totalBalance -= this.budget.amount
      this.totalExpense += this.budget.amount
    }

    this.transactionList.push(this.budget)

    console.log(this.transactionList)

    this.budget = {
      description: '',
      amount: 0,
      type: 'income',
      category: 'default'
    }

  }
}
