import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart,  } from '@angular/router';
import { AuthService } from "./services/auth.service";

@Component({
  providers: [AuthService],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public isAdminPage: boolean = false;
  public menuName: string;
  public isLogin: boolean = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
  ) {

  }

  ngOnInit() {
    this.isLogin = this.authService.isLogin();
    this.router.events.subscribe(event => {
      let root: ActivatedRoute = this.activatedRoute.root;
    });


  }

  checkAdminPage(event) {
    if (event instanceof NavigationStart) {
      if (event.url.startsWith('/admin')) {
        this.isAdminPage = true;
      }
    }
  }

}
