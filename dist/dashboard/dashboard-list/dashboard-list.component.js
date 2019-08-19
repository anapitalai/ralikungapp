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
var dashboard_service_1 = require("../../shared/services/dashboard.service");
var DashboardListComponent = (function () {
    function DashboardListComponent(service) {
        this.service = service;
    }
    DashboardListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getUsers()
            .subscribe(function (users) { return _this.users = users; });
    };
    DashboardListComponent = __decorate([
        core_1.Component({
            styles: ["\n   .user-card{cursor:pointer;\n    align-items::center;\n  }\n  .user-card:hover{\n    background:grey;\n    border-radius:20px;\n    \n  }\n\n  img{\n    width:150px;\n    height:150px;\n\n  }\n  "],
            templateUrl: './app/dashboard/dashboard-list/dashboard-list.component.html'
        }),
        __metadata("design:paramtypes", [dashboard_service_1.DashboardService])
    ], DashboardListComponent);
    return DashboardListComponent;
}());
exports.DashboardListComponent = DashboardListComponent;
//# sourceMappingURL=dashboard-list.component.js.map