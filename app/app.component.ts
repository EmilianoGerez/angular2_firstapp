import {Component} from 'angular2/core';
import {MainmenuComponent} from './shared/menu/main-menu.component';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'

import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/components/user.component';
import {UserFormComponent} from "./user/components/user-form.component";

@RouteConfig([
    {path: '/home', name: "Home", component: HomeComponent, useAsDefault: true},
    {path: '/users', name: 'Users', component: UserComponent},
    {path: '/users/new', name: 'UsersNew', component: UserFormComponent},
    {path: '/*other', name: 'Other', redirectTo: ['Home']}
])

@Component({
    selector: 'my-app',
    templateUrl: './app/app.template.html',
    directives: [ROUTER_DIRECTIVES, MainmenuComponent]
})
export class AppComponent { }