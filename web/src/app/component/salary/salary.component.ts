import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SalaryService } from '../../services/salary.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Salary } from '../../models/salary.model';
import * as moment from 'moment';

@Component({
  providers: [SalaryService, NgbModalConfig, NgbModal],
  selector: 'salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css'],
})
export class SalaryComponent implements OnInit {
  private salary: Salary;
  private monthlyDisplay: string;
  private salaryList: Salary[];
  private grandWorkdays: number = 0;
  private grandAmount: number = 0;
  private grandTax: number = 0;
  private grandTotalAmount: number = 0;

  public listYear: any[] = [];
  public currentYear: number;

  constructor(
    private salaryService: SalaryService,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
   }

  ngOnInit() {
    this.currentYear = parseInt(moment().format('YYYY'));
    this.listYear = this.getYears(this.currentYear);

    this.initSalaryForm();
    this.getSalaryByYear(this.currentYear);
  }

  onKeyWorkdays() {
    this.salary.totalAmount = this.salary.workdays * this.salary.amountPerDay;
    this.salary.tax = (this.salary.totalAmount * this.salary.taxRate / 100);
    this.salary.amount = (this.salary.totalAmount) - (this.salary.tax);
  }

  calOtherAmount() {
    this.salary.amount = sum(this.salary.otherAmount, this.salary.amount);
    this.salary.totalAmount = sum(this.salary.otherAmount, this.salary.totalAmount);

    function sum(num1: any = 0, num2: any = 0) {
      return parseFloat(num1) + parseFloat(num2);
    }
  }

  save() {
    if (this.salary.totalAmount > 0) {
      this.salaryService.save(this.salary).subscribe(resp => {
        console.log('save success.');
        this.initSalaryForm();
        this.getSalaryByYear(this.currentYear);
      });
    }
  }

  openModal(content) {
    this.modalService.open(content, { size: 'sm' }).result.then(rs => {
        if (rs === 'save') this.save();
    });
  }

  changeYear(year) {
    this.getSalaryByYear(year);
    this.listYear = this.getYears(parseInt(year), this.currentYear);
  }

  private getYears(year: number, currentYear: number = null) {
    let years = [];
    if (year === currentYear || !currentYear) {
      for (let i = year - 2; i <= year; i++) {
        years.push(i);
      }
    } else {
      let nextYear = (year + 2 > currentYear) ? currentYear : year + 2;
      for (let i = year - 2; i <= nextYear; i++) {
        years.push(i);
      }
    }

    return years;
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
        this.grandAmount += data.amount;
        this.grandTax += data.tax;
        this.grandTotalAmount += data.totalAmount;
        this.grandWorkdays += data.workdays;
      });
    });
  }

}





