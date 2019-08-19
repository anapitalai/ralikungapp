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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var teacher_service_1 = require("../../shared/services/teacher.service");
var uri = 'http://localhost:3007/teachers';
var TeachersCreateComponent = (function () {
    function TeachersCreateComponent(http, router, service, fb) {
        this.http = http;
        this.router = router;
        this.service = service;
        this.fb = fb;
        this.teacher = { name: '', description: '', avatarImage: '' };
        this.errorMessage = '';
        this.successMessage = '';
        this.filesToUpload = [];
        this.provinces = [
            'East New Britain',
            'West New Britain',
            'New Ireland',
            'Manus',
            'East Sepik',
            'West Sepik',
            'Morobe',
            'Central',
            'Madang',
            'Southern Highlands',
            'Oro',
            'Milne Bay',
            'Eastern Highlands',
            'Western Highlands',
            'Southern Highlands',
            'Western',
            'Gulf'
        ];
    }
    TeachersCreateComponent.prototype.ngOnInit = function () {
        this.form = new forms_1.FormGroup({
            name: new forms_1.FormControl(''),
            description: new forms_1.FormControl(''),
            avatarImage: new forms_1.FormControl('')
        });
    };
    TeachersCreateComponent.prototype.onFileSelected = function (event) {
        this.filesToUpload = event.target.files;
    };
    TeachersCreateComponent.prototype.createTeacher = function () {
        this.successMessage = '';
        this.errorMessage = '';
        console.log(this.form);
        console.log(this.form.value);
        var files = this.filesToUpload;
        var fd = new FormData();
        for (var i = 0; i < files.length; i++) {
            fd.append("avatarImage", files[i], files[i]['name']);
            fd.append('name', this.form.value.name);
            fd.append('description', this.form.value.description);
        }
        //this.http.post('http://localhost:3007/teachers', fd)
        this.http.post('http://chervicontraining.com:3000/teachers', fd)
            .subscribe(function (res) {
            console.log(res);
        });
    };
    TeachersCreateComponent = __decorate([
        core_1.Component({
            styles: ["\n  input.ng-valid.ng-touched{\n    border-left:5px solid green;\n  }\n  input.ng-invalid.ng-touched{\n    border-left:5px solid red;\n  }\n\n "],
            templateUrl: './app/teachers/teachers-create/teachers-create.component.html'
        }),
        __metadata("design:paramtypes", [http_1.Http, router_1.Router, teacher_service_1.TeacherService, forms_1.FormBuilder])
    ], TeachersCreateComponent);
    return TeachersCreateComponent;
}());
exports.TeachersCreateComponent = TeachersCreateComponent;
//# sourceMappingURL=teachers-create.component.js.map