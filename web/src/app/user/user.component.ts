import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';

@Component({
    providers: [UserService],
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    constructor(
        private userService: UserService
    ) { }

    public users: any;

    ngOnInit() {
        this.userService.getUsers().subscribe((reps: any) => {
            this.users = reps.json();
        });

    }

}
