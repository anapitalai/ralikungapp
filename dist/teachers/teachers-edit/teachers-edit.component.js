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
var router_1 = require("@angular/router");
var teacher_service_1 = require("../../shared/services/teacher.service");
var TeachersEditComponent = (function () {
    function TeachersEditComponent(route, service) {
        this.route = route;
        this.service = service;
        this.successMessage = '';
        this.errorMessage = '';
    }
    TeachersEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var _id = this.route.snapshot.params['id'];
        this.service.getContact(_id)
            .subscribe(function (teacher) { return _this.teacher = teacher; });
    };
    TeachersEditComponent.prototype.updateContact = function () {
        var _this = this;
        this.service.updateContact(this.teacher)
            .subscribe(function (teacher) {
            _this.successMessage = 'Profile was updated.';
            console.log('Profile updated');
        }, function (err) {
            _this.errorMessage = 'Contact cant be updated!';
            console.error(err);
        });
        this.errorMessage = '';
        this.successMessage = '';
    };
    TeachersEditComponent = __decorate([
        core_1.Component({
            templateUrl: './app/teachers/teachers-edit/teachers-edit.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, teacher_service_1.TeacherService])
    ], TeachersEditComponent);
    return TeachersEditComponent;
}());
exports.TeachersEditComponent = TeachersEditComponent;
//# sourceMappingURL=teachers-edit.component.js.map