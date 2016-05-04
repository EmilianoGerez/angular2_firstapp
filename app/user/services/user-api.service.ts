/**
 * Created by hp on 3/5/2016.
 */
import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map'

@Injectable()

export class UserApi {
    private baseUrl = 'http://jsonplaceholder.typicode.com/users';

    constructor(private _http:Http) {
    }

    getAll() {
        return this._http.get(this.baseUrl)
            .map(res => res.json());
    }

    getOne(id) {
        return this._http.get(this.getUrl(id))
            .map(res => res.json());
    }

    create(user) {
        return this._http.post(this.baseUrl, JSON.stringify(user))
            .map(res => res.json())
    }

    update(user) {
        return this._http.put(this.getUrl(user.id), JSON.stringify(user))
            .map(res => res.json());
    }

    delete(id) {
        return this._http.delete(this.getUrl(id))
            .map(res => res.json());
    }

    getUrl(id) {
        return this.baseUrl + '/' + id;
    }
}