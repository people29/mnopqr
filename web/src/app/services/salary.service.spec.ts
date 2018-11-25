import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';
import { SalaryService } from './salary.service';

fdescribe('SalaryService', ()=> {
  let injector: TestBed;
  let service: SalaryService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SalaryService]
    });
    injector = getTestBed();
    service = injector.get(SalaryService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('#getAll', () => {
    it('should return an Observable<[]>', () => {
      const dummyUsers = [
        { workday: 20, amount: 20000, tax: 100 },
        { workday: 12, amount: 20000, tax: 100 },
      ];

      service.getAll().subscribe(users => {
        expect(users.length).toBe(2);
        expect(users).toEqual(dummyUsers);
      });

      const req = httpMock.expectOne(environment.apiUrl + '/api/salary');
      expect(req.request.method).toBe('GET');
      req.flush(dummyUsers);
    });
  });

  describe('#save', ()=> {
    it('should post request to save salary', ()=> {
      const data = {
        monthly: '2018-11',
        date: new Date(),
        workday: 20,
        tax: 5000,
        netAmount: 500000
      };

      service.save(data).subscribe();

      const req = httpMock.expectOne(environment.apiUrl + '/api/salary');
      expect(req.request.method).toBe('POST');
      req.flush(data);
    });
  });

});