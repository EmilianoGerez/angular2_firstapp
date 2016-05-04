import {Component, OnInit} from 'angular2/core';
import {FormBuilder, ControlGroup, Validators} from 'angular2/common'
import {Router, RouteParams} from "angular2/router";
import {User} from '../models/user.model'
import {UserApi} from "../services/user-api.service";

@Component({
    selector: 'user-form',
    templateUrl: './app/user/templates/user-form.template.html',
    providers: [UserApi]
})
export class UserFormComponent implements OnInit{
    user = new User();
    userForm: ControlGroup;

    constructor(fb:FormBuilder,
                private _router:Router,
                private _routeParams:RouteParams,
                private _userApi:UserApi) {
        this.userForm = fb.group({
            name: [],
            email: [],
            username: [],
            address: fb.group({
                street: [],
                suite: [],
                city: [],
                zipcode: []
            })
        });
    }

    ngOnInit() {
        let id = this._routeParams.get('id');

        if (!id)
            return;

        this._userApi.getOne(id)
            .subscribe(user => this.user = user);
    }

    save() {
        let result;

        if (this.user.id)
            result = this._userApi.update(this.user);
        else
            result = this._userApi.create(this.user);

        result.subscribe(() => {
            this._router.navigate(['Users']);
        })
    }


}