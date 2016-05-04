import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';

import {UsersListComponent} from './users-list.component';
import {UserApi} from '../services/user-api.service';

@RouteConfig{[
    {path: '/', component: UsersListComponent, as: 'UserDetail', useAsDefault: true}
]}

@Component({
    selector: 'users',
    templateUrl: './app/user/templates/user.template.html',
    providers: [UserApi]
})

export class UserComponent {
    users;
    constructor(private userApi: UserApi){

    }

    ngOnInit(){
        this.userApi.getAll()
            .subscribe(users => this.users = users);
    }
}
