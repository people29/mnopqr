import { of } from 'rxjs';
import { Location } from '@angular/common';
import { UserComponent } from './user.component';
import { UserService } from '../../services/user.service';
import { HttpClient } from '@angular/common/http';


describe('UserComponent', ()=> {
  let component: UserComponent;
  let userService: UserService;
  let http: HttpClient;
  let location: Location;
  let spy: any;

  beforeEach(()=> {
    userService = new UserService(http, location);
    component = new UserComponent(userService);
  });

  afterEach(() => {
    userService = null;
    component = null;
  });

  it('on init', () => {
    //Stub:
    // loginServiceStub = {
    //   logIn: jasmine.createSpy('logIn').and.returnValue(Observable.of(true))
    // }
    //In the test:
    //const navigateByUrlSpy = spyOn(router, 'navigateByUrl').and.callThrough();

    spyOn(userService, 'getUsers').and.returnValue(of([{name:"xx"}]));
    component.ngOnInit();
    expect(userService.getUsers).toHaveBeenCalled();
  });

});
