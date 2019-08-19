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
var professional_service_1 = require("../../shared/services/professional.service");
var auth_service_1 = require("../../shared/services/auth.service");
var ProfessionalSingleComponent = (function () {
    function ProfessionalSingleComponent(route, router, authService, service) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.service = service;
    }
    ProfessionalSingleComponent.prototype.ngOnInit = function () {
        var _this = this;
        var _id = this.route.snapshot.params['id'];
        this.service.getProfessional(_id)
            .subscribe(function (professional) { return _this.professional = professional; });
    };
    ProfessionalSingleComponent.prototype.deleteProfessional = function () {
        var _this = this;
        this.service.deleteProfessional(this.professional._id)
            .subscribe(function (data) {
            _this.router.navigate(['/professionals']);
        });
    };
    ProfessionalSingleComponent = __decorate([
        core_1.Component({
            styles: ["\n  .img-circle{\n    width:320px;\n    heigth:320px;\n  }\n     .img-parent{\n       display:flex;\n       justify-content:center;\n     }\n  "
            ],
            templateUrl: './app/professionals/professional-single/professional-single.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            auth_service_1.AuthService,
            professional_service_1.ProfessionalService])
    ], ProfessionalSingleComponent);
    return ProfessionalSingleComponent;
}());
exports.ProfessionalSingleComponent = ProfessionalSingleComponent;
//# sourceMappingURL=professional-single.component.js.map