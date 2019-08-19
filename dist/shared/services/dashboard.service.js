"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var Observable_1 = require("rxjs/Observable");
var Subject_1 = require("rxjs/Subject");
var DashboardService = (function () {
    function DashboardService(http) {
        this.http = http;
        //private url:string='http://localhost:3007/users';
        this.url = 'http://chervicontraining.com:3000/users';
        //observable source
        this.userDeletedSource = new Subject_1.Subject();
        this.userCreatedSource = new Subject_1.Subject();
        //observable stream
        this.userCreated$ = this.userCreatedSource.asObservable();
        this.userDeleted$ = this.userDeletedSource.asObservable();
    }
    //all contacts
    DashboardService.prototype.getUsers = function () {
        return this.http.get(this.url)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DashboardService.prototype.handleError = function (err) {
        var errMessage;
        if (err instanceof http_1.Response) {
            var body = err.json() || '';
            var error = body.error || JSON.stringify(body);
            errMessage = err.status + "-" + (err.statusText || '') + " " + error;
        }
        else {
            errMessage = err.message ? err.message : err.toString();
        }
        return Observable_1.Observable.throw(errMessage);
    };
    //get single contact
    DashboardService.prototype.getUser = function (id) {
        return this.http.get(this.url + "/" + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    //get single user profile image
    DashboardService.prototype.getUserProfile = function (id) {
        return this.http.get(this.url + "/" + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    //update user details
    DashboardService.prototype.updateUser = function (user) {
        return this.http.put(this.url + "/" + user._id, user)
            .map(function (user) { return user.json(); })
            .catch(this.handleError);
    };
    //update user details
    DashboardService.prototype.updater = function (user) {
        return this.http.put(this.url + "/update/" + user._id, user)
            .map(function (user) { return user.json(); })
            .catch(this.handleError);
    };
    DashboardService.prototype.createUser = function (user) {
        var _this = this;
        return this.http.post(this.url + "/signup", user)
            .map(function (res) { return res.json(); })
            .do(function (user) { return _this.userCreated(user); })
            .catch(this.handleError);
    };
    DashboardService.prototype.userDelete = function (id) {
        var _this = this;
        return this.http.delete(this.url + "/" + id)
            .do(function (res) { return _this.userDeleted(); })
            .catch(this.handleError);
    };
    //messages
    DashboardService.prototype.userCreated = function (teacher) {
        console.log('New Teacher has been created!');
        this.userCreatedSource.next(teacher);
    };
    DashboardService.prototype.userDeleted = function () {
        this.userDeletedSource.next();
        console.log('Teacher has been deleted!');
    };
    DashboardService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], DashboardService);
    return DashboardService;
}());
exports.DashboardService = DashboardService;
//# sourceMappingURL=dashboard.service.js.map