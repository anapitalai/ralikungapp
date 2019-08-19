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
var teacher_service_1 = require("../shared/services/teacher.service");
var TeachersComponent = (function () {
    function TeachersComponent(service) {
        this.service = service;
        this.successMessage = '';
        this.errorMessage = '';
    }
    TeachersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.contactCreated$.subscribe(function (teacher) {
            _this.successMessage = teacher.name + " has been created";
            _this.clearMessages();
        });
        this.service.contactDeleted$.subscribe(function () {
            _this.successMessage = "The teacher has been deleted";
            _this.clearMessages();
        });
    };
    //clear messages emthod
    TeachersComponent.prototype.clearMessages = function () {
        var _this = this;
        setTimeout(function () {
            _this.errorMessage = '';
            _this.successMessage = '';
        }, 2000);
    };
    TeachersComponent = __decorate([
        core_1.Component({
            selector: 'my-contacts',
            templateUrl: './app/teachers/teachers.component.html'
        }),
        __metadata("design:paramtypes", [teacher_service_1.TeacherService])
    ], TeachersComponent);
    return TeachersComponent;
}());
exports.TeachersComponent = TeachersComponent;
//# sourceMappingURL=teachers.component.js.map