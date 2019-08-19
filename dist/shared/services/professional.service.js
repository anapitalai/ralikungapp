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
var ProfessionalService = (function () {
    function ProfessionalService(http) {
        this.http = http;
        //private url:string='http://localhost:3007/professionals';
        this.url = 'http://chervicontraining.com:3000/professionals';
        //observable source
        this.deletedProfessionalSource = new Subject_1.Subject();
        this.createdProfessionalSource = new Subject_1.Subject();
        //observable stream
        this.createdProfessional$ = this.createdProfessionalSource.asObservable();
        this.deletedProfessional$ = this.deletedProfessionalSource.asObservable();
    }
    //all contacts
    ProfessionalService.prototype.getProfessionals = function () {
        return this.http.get("" + this.url)
            .map(function (res) { return res.json().professionals; })
            .catch(this.handleError);
    };
    ProfessionalService.prototype.handleError = function (err) {
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
    ProfessionalService.prototype.getProfessional = function (id) {
        return this.http.get(this.url + "/" + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    //update user details
    ProfessionalService.prototype.updateProfessional = function (professional) {
        return this.http.put(this.url + "/" + professional._id, professional)
            .map(function (teacher) { return teacher.json(); })
            .catch(this.handleError);
    };
    ProfessionalService.prototype.createProfessional = function (teacher) {
        var _this = this;
        return this.http.post(this.url, teacher)
            .map(function (res) { return res.json(); })
            .do(function (teacher) { return _this.createdProfessional(teacher); })
            .catch(this.handleError);
    };
    ProfessionalService.prototype.deleteProfessional = function (id) {
        var _this = this;
        return this.http.delete(this.url + "/" + id)
            .do(function (res) { return _this.deletedProfessional(); })
            .catch(this.handleError);
    };
    //messages
    ProfessionalService.prototype.createdProfessional = function (teacher) {
        console.log('New Teacher has been created!');
        this.createdProfessionalSource.next(teacher);
    };
    ProfessionalService.prototype.deletedProfessional = function () {
        this.deletedProfessionalSource.next();
        console.log('Teacher has been deleted!');
    };
    ProfessionalService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ProfessionalService);
    return ProfessionalService;
}());
exports.ProfessionalService = ProfessionalService;
//# sourceMappingURL=professional.service.js.map