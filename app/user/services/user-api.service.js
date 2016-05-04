System.register(['angular2/http', 'angular2/core', 'rxjs/add/operator/map'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1;
    var UserApi;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {}],
        execute: function() {
            UserApi = (function () {
                function UserApi(_http) {
                    this._http = _http;
                    this.baseUrl = 'http://jsonplaceholder.typicode.com/users';
                }
                UserApi.prototype.getAll = function () {
                    return this._http.get(this.baseUrl)
                        .map(function (res) { return res.json(); });
                };
                UserApi.prototype.getOne = function (id) {
                    return this._http.get(this.getUrl(id))
                        .map(function (res) { return res.json(); });
                };
                UserApi.prototype.create = function (user) {
                    return this._http.post(this.baseUrl, JSON.stringify(user))
                        .map(function (res) { return res.json(); });
                };
                UserApi.prototype.update = function (user) {
                    return this._http.put(this.getUrl(user.id), JSON.stringify(user))
                        .map(function (res) { return res.json(); });
                };
                UserApi.prototype.delete = function (id) {
                    return this._http.delete(this.getUrl(id))
                        .map(function (res) { return res.json(); });
                };
                UserApi.prototype.getUrl = function (id) {
                    return this.baseUrl + '/' + id;
                };
                UserApi = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], UserApi);
                return UserApi;
            }());
            exports_1("UserApi", UserApi);
        }
    }
});
//# sourceMappingURL=user-api.service.js.map