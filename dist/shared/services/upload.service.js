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
var Observable_1 = require("rxjs/Observable");
var ng2_file_upload_1 = require("ng2-file-upload");
var UploadService = (function () {
    //observable source
    //private contactDeletedSource=new Subject();
    //private contactCreatedSource=new Subject<Upload>();
    //observable stream
    //contactCreated$=this.contactCreatedSource.asObservable();
    //contactDeleted$=this.contactDeletedSource.asObservable();
    function UploadService(http) {
        this.http = http;
        this.uploadUrl = "";
        this.uploader = new ng2_file_upload_1.FileUploader({ url: this.uploadUrl });
        this.attachementList = [];
    }
    //errr handling
    UploadService.prototype.handleError = function (err) {
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
    UploadService.prototype.uploadCreated = function (upload) {
        console.log('New Teacher has been created!');
        //this.contactCreatedSource.next(upload);
    };
    UploadService.prototype.createUpload = function (upload) {
        var _this = this;
        return this.http.post(this.uploadUrl, upload)
            .map(function (res) { return res.json(); })
            .do(function (teacher) { return _this.uploadCreated(upload); })
            .catch(this.handleError);
    };
    /**
    uploadCreated(upload:Upload){
      console.log('New Teacher has been created!');
      //this.contactCreatedSource.next(upload);
    }**/
    UploadService.prototype.ngOnInit = function () { };
    UploadService = __decorate([
        core_1.Component({
            templateUrl: './app/upload/upload-create.component.html'
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], UploadService);
    return UploadService;
}());
exports.UploadService = UploadService;
//# sourceMappingURL=upload.service.js.map