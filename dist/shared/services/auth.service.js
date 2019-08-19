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
var angular2_jwt_1 = require("angular2-jwt");
var Observable_1 = require("rxjs/Observable");
var AuthService = (function () {
    function AuthService(authHttp) {
        this.authHttp = authHttp;
        //private authUrl='http://localhost:3007/users/login';
        this.authUrl = 'http://chervicontraining.com:3000/users/login';
        this.loggedIn = false;
        this.token = localStorage.getItem('token');
        //testing
        this.jwtHelper = new angular2_jwt_1.JwtHelper();
        this.loggedIn = !!localStorage.getItem('token');
    }
    AuthService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return this.authHttp.post("" + this.authUrl, { email: email, password: password })
            .map(function (res) { return res.json(); })
            .do(function (res) {
            //const expiresAt=JSON.stringify(((this.jwtHelper.decodeToken(this.token)).exp) * 1000 + new Date().getTime());
            if (res.token) {
                localStorage.setItem('token', res.token);
                //localStorage.setItem('expiresAt',expiresAt);
                _this.loggedIn = true;
                _this.useJwtHelper();
            }
        })
            .catch(this.handleError);
    };
    //logout
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
        this.loggedIn = false;
    };
    AuthService.prototype.useJwtHelper = function () {
        var token = localStorage.getItem('token');
        //var expirationDate=this.jwtHelper.getTokenExpirationDate(token);
        //const decodedTkn=this.jwtHelper.decodeToken(token).exp;
        console.log(this.jwtHelper.decodeToken(token), this.jwtHelper.getTokenExpirationDate(token), this.jwtHelper.isTokenExpired(token));
    };
    //handle errors
    AuthService.prototype.handleError = function (err) {
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
    AuthService.prototype.ngOnInit = function () { };
    AuthService = __decorate([
        core_1.Component({
            templateUrl: './app/auth/auth.component.html'
        }),
        __metadata("design:paramtypes", [angular2_jwt_1.AuthHttp])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map