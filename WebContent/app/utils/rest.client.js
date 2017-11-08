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
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/map");
var RestClient = (function () {
    function RestClient(http) {
        this.http = http;
    }
    RestClient.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        return headers;
    };
    RestClient.prototype.getSecuredHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        //    headers.append("Access-Control-Allow-Origin", '*');
        //    headers.append("Access-Control-Allow-Credentials", true);
        //    headers.append("Access-Control-Allow-Methods", 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
        //    headers.append("Access-Control-Allow-Headers", 'Origin, Content-Type, X-Auth-Token');
        headers.append('Authorization', 'Basic ' + btoa('user:password'));
        return headers;
    };
    RestClient.prototype.getPdfHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/pdf');
        return headers;
    };
    RestClient.prototype.getDummyValue = function () {
        return Math.random().toString(36).substring(7);
    };
    RestClient.prototype.getHeaderParams = function () {
        var params = new http_1.URLSearchParams();
        //    params.set('uuid', this.global.uuid);
        params.set('token', this.getDummyValue()); // to avoid http caching
        return params;
    };
    RestClient.prototype.setParam = function (params, key, val) {
        if (val) {
            params.set(key, val);
        }
    };
    RestClient.prototype.paramsToJson = function (params) {
        var entryMap = params.paramsMap.entries();
        var val = null, i = 0, jsonParams = '';
        while (val = entryMap.next().value) {
            if (i > 0) {
                jsonParams += ',';
            }
            jsonParams += ('"' + val[0] + '":"' + val[1] + '"');
            i++;
        }
        jsonParams = '{' + jsonParams + '}';
        return jsonParams;
    };
    RestClient.prototype.testGoogleHome = function () {
        console.log('getData...');
        var url = 'http://google.com';
        url = "http://localhost:5000/BnrTransferCredits/institutions/";
        return this.http.get(url, { headers: this.getHeaders() })
            .map(function (res) {
            console.log('res=' + res);
            if (res.status < 200 || res.status >= 300) {
                throw new Error('This request has failed ' + res.status);
            }
            else {
                return JSON.stringify(res.json());
            }
        });
    };
    RestClient.prototype.testMicroServiceAPI = function () {
        console.log('testMicroServiceAPI...');
        var url = "http://localhost:8080/api/test";
        url = "http://localhost:5000/MQWebServices/api/test";
        //url = "http://api.money.126.net/data/feed/0000001,1399001?callback=refreshPrice";
        return this.http.get(url, { headers: this.getSecuredHeaders() })
            .map(function (res) {
            console.log('res=' + res);
            if (res.status < 200 || res.status >= 300) {
                throw new Error('This request has failed ' + res.status);
            }
            else {
                return res;
            }
        });
    };
    RestClient.prototype.testFindOneAPI = function () {
        console.log('testMicroServiceAPI...');
        var url = "http://localhost:8080/api/findOne/2806";
        return this.http.get(url, { headers: this.getSecuredHeaders() })
            .map(function (res) {
            console.log('res=' + res);
            if (res.status < 200 || res.status >= 300) {
                throw new Error('This request has failed ' + res.status);
            }
            else {
                return JSON.stringify(res.json());
            }
        });
    };
    RestClient.prototype.testAPI = function () {
        console.log('getData...');
        var url = "http://samples.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b1b15e88fa797225412429c1c50c122a1";
        return this.http.get(url, { headers: this.getHeaders() })
            .map(function (res) {
            console.log('res=' + res);
            if (res.status < 200 || res.status >= 300) {
                throw new Error('This request has failed ' + res.status);
            }
            else {
                return JSON.stringify(res.json());
            }
        });
    };
    return RestClient;
}());
RestClient = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], RestClient);
exports.RestClient = RestClient;

//# sourceMappingURL=rest.client.js.map
