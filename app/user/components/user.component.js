System.register(['angular2/core', './users-list.component', '../services/user-api.service'], function(exports_1, context_1) {
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
    var core_1, users_list_component_1, user_api_service_1;
    var UserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (users_list_component_1_1) {
                users_list_component_1 = users_list_component_1_1;
            },
            function (user_api_service_1_1) {
                user_api_service_1 = user_api_service_1_1;
            }],
        execute: function() {
            {
                [
                    { path: '/', component: users_list_component_1.UsersListComponent, as: 'UserDetail', useAsDefault: true }
                ];
            }
            UserComponent = (function () {
                function UserComponent(userApi) {
                    this.userApi = userApi;
                }
                UserComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.userApi.getAll()
                        .subscribe(function (users) { return _this.users = users; });
                };
                UserComponent = __decorate([
                    core_1.Component({
                        selector: 'users',
                        templateUrl: './app/user/templates/user.template.html',
                        providers: [user_api_service_1.UserApi]
                    }), 
                    __metadata('design:paramtypes', [user_api_service_1.UserApi])
                ], UserComponent);
                return UserComponent;
            }());
            exports_1("UserComponent", UserComponent);
        }
    }
});
//# sourceMappingURL=user.component.js.map