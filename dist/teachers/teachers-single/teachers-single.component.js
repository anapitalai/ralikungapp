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
var TeachersSingleComponent = (function () {
    function TeachersSingleComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    TeachersSingleComponent.prototype.ngOnInit = function () {
        var _this = this;
        var _id = this.route.snapshot.params['id'];
        this.service.getContact(_id)
            .subscribe(function (teachers) { return _this.teachers = teachers; });
    };
    TeachersSingleComponent.prototype.teacherDelete = function () {
        var _this = this;
        this.service.teacherDelete(this.teachers._id)
            .subscribe(function (data) {
            _this.router.navigate(['/teachers']);
        });
    };
    TeachersSingleComponent = __decorate([
        core_1.Component({
            styles: [
                " \n   .alink{\n     cursor:pointer;\n   }\n   .img-circle{\n     width:120px;\n     heigth:120px;\n   }\n\n   .img-parent{\n    display:flex;\n    justify-content:center;\n  }\n\n    "
            ],
            templateUrl: './app/teachers/teachers-single/teachers-single.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            teacher_service_1.TeacherService])
    ], TeachersSingleComponent);
    return TeachersSingleComponent;
}());
exports.TeachersSingleComponent = TeachersSingleComponent;
//# sourceMappingURL=teachers-single.component.js.map