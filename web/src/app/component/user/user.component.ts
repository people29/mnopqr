import { Component, OnInit, Input } from '@angular/core';

import { UserService } from '../../services/user.service';

@Component({
    providers: [UserService],
    selector: 'user-component',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    constructor(
        private userService: UserService
    ) { }
    public users: any;
    public username: string;

    ngOnInit() {
        this.userService.getUsers().subscribe((resp: any) => {
            this.users = resp;
        }, err => {
            console.log("err > ", err.error);
        });
    }

    search() {
        this.userService.getUser(this.userId).subscribe((data: any) => {
            this.username = "";
            if (data) this.username = data.display+ " "+ data.email;
        });
    }


    @Input('userId') public userId: any;

}
