import { Component, OnInit, Input } from '@angular/core';
import { SalaryService } from '../../services/salary.service';
import { Salary } from '../../models/salary.model';
import * as moment from 'moment';

@Component({
  providers: [SalaryService],
  selector: 'salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit {
  private salary: Salary;
  private monthlyDisplay: string;
  private salaryList: Salary[];
  private currentYear: string;
  private listYear: any[] = [];
  private grandWorkdays: number = 0;
  private grandAmount: number = 0;
  private grandTax: number = 0;
  private grandTotalAmount: number = 0;

  constructor(
    private salaryService: SalaryService,
  ) { }

  ngOnInit() {
    this.currentYear = moment().format('YYYY');
    this.prepareListYear();
    this.initSalaryForm();

    this.getSalaryByYear(this.currentYear);
  }

  onKeyWorkdays() {
    this.salary.totalAmount = this.salary.workdays * this.salary.amountPerDay;
    this.salary.tax = (this.salary.totalAmount * this.salary.taxRate / 100);
    this.salary.amount = (this.salary.totalAmount) - (this.salary.tax);
  }

  save() {
    //confirm modal
    if (this.salary.workdays > 0) {
      this.salaryService.save(this.salary).subscribe(resp => {
        console.log('save success.');
        this.initSalaryForm();
        this.getSalaryByYear(this.currentYear);
      });
    }
  }

  changeYear(year) {
    this.getSalaryByYear(year);

    //given current year is 2018 then listYear is [2018, 2017, 2016]
    //change year to 2016 then expect listYear is [2018, 2017, 2016, 2015, 2014]
    //change year to 2017 then expect listYear is [2018, 2017, 2016, 2015]
    //change year to 2015 then expect listYear is [2017, 2016, 2015, 2014, 2013]
    //change year to 2014 then expect listYear is [2016, 2015, 2014, 2013, 2012]
    //change year to 2013 then expect listYear is [2015, 2014, 2013, 2012, 2011]
  }

  private prepareListYear() {
    let curYear = parseInt(this.currentYear);
    for(let i = curYear - 2; i <= curYear; i++) {
      this.listYear.push(i.toString());
    }
  }

  private initSalaryForm() {
    const amountPerDay: number = 3500;
    const taxRate: number = 3.0;

    this.monthlyDisplay = moment().format('MMMM YYYY');
    this.salary = new Salary();
    this.salary.monthly = moment().format('MM/YYYY');
    this.salary.taxRate = taxRate;
    this.salary.amountPerDay = amountPerDay;
  }

  private getSalaryByYear(year) {
    this.salaryService.getByYear(year).subscribe(resp => {
      this.grandAmount = 0;
      this.grandTax = 0;
      this.grandTotalAmount = 0;
      this.grandWorkdays = 0;

      this.salaryList = resp;
      resp.map(data => {
        this.grandAmount+=data.amount;
        this.grandTax+=data.tax;
        this.grandTotalAmount+=data.totalAmount;
        this.grandWorkdays+=data.workdays;
      });
    });
  }

}





