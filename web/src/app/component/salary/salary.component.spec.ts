import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { SalaryComponent } from './salary.component';
import { SalaryService } from 'src/app/services/salary.service';


describe('SalaryComponent', () => {
  let component: SalaryComponent;
  let fixture: ComponentFixture<SalaryComponent>;
  let injector: TestBed;
  let service: SalaryService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule],
      declarations: [SalaryComponent],
      providers: [SalaryService]
    })
    .compileComponents();

    injector = getTestBed();
    service = injector.get(SalaryService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  describe('set list of year', ()=> {
    beforeEach(()=> {
      component.currentYear = 2018;
    });

    it('should return correct list of year when input year is 2018', ()=> {
      component.changeYear(2018);
      expect(component.listYear).toEqual([2016, 2017, 2018]);
    });

    it('should return correct list of year when input year is 2017', ()=> {
      component.changeYear(2017);
      expect(component.listYear).toEqual([2015, 2016, 2017, 2018]);
    });

    it('should return correct list of year when input year is 2016', ()=> {
      component.changeYear(2016);
      expect(component.listYear).toEqual([2014, 2015, 2016, 2017, 2018]);
    });

    it('should return correct list of year when input year is 2015', ()=> {
      component.changeYear(2015);
      expect(component.listYear).toEqual([2013, 2014, 2015, 2016, 2017]);
    });

    it('should return correct list of year when input year is 2014', ()=> {
      component.changeYear(2014);
      expect(component.listYear).toEqual([2012, 2013, 2014, 2015, 2016]);
    });

  });

});
