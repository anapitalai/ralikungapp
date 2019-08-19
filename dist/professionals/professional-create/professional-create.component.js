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
var http_1 = require("@angular/http");
var professional_service_1 = require("../../shared/services/professional.service");
var forms_1 = require("@angular/forms");
var ProfessionalCreateComponent = (function () {
    function ProfessionalCreateComponent(http, router, service) {
        this.http = http;
        this.router = router;
        this.service = service;
        this.professional = { name: '', description: '', images: '' };
        this.errorMessage = '';
        this.successMessage = '';
        this.filesToUpload = [];
    }
    ProfessionalCreateComponent.prototype.ngOnInit = function () {
        this.form = new forms_1.FormGroup({
            name: new forms_1.FormControl(''),
            description: new forms_1.FormControl(''),
            images: new forms_1.FormControl('')
        });
    };
    ProfessionalCreateComponent.prototype.onFileSelected = function (event) {
        this.filesToUpload = event.target.files;
    };
    ProfessionalCreateComponent.prototype.createProfessional = function () {
        this.successMessage = '';
        this.errorMessage = '';
        console.log(this.form);
        console.log(this.form.value);
        var files = this.filesToUpload;
        var fd = new FormData();
        for (var i = 0; i < files.length; i++) {
            fd.append('images', files[i], files[i]['name']);
            fd.append('name', this.form.value.name);
            fd.append('description', this.form.value.description);
        }
        //this.http.post('http://localhost:3007/professionals',fd)
        this.http.post('http://chervicontraining.com:3000/professionals', fd)
            .subscribe(function (res) {
            console.log(res);
        });
    };
    ProfessionalCreateComponent = __decorate([
        core_1.Component({
            templateUrl: './app/professionals/professional-create/professional-create.component.html'
        }),
        __metadata("design:paramtypes", [http_1.Http, router_1.Router, professional_service_1.ProfessionalService])
    ], ProfessionalCreateComponent);
    return ProfessionalCreateComponent;
}());
exports.ProfessionalCreateComponent = ProfessionalCreateComponent;
//# sourceMappingURL=professional-create.component.js.map