import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams, Response, ResponseContentType, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class RestClient {
  constructor(private http: Http) { }
  
  getHeaders() : Headers {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    return headers;
  }
  
  getSecuredHeaders() : Headers {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
//    headers.append("Access-Control-Allow-Origin", '*');
//    headers.append("Access-Control-Allow-Credentials", true);
//    headers.append("Access-Control-Allow-Methods", 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
//    headers.append("Access-Control-Allow-Headers", 'Origin, Content-Type, X-Auth-Token');
    headers.append('Authorization', 'Basic ' + btoa('user:password'));
    return headers;
  }
  getPdfHeaders() : Headers {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/pdf');
    return headers;
  }  
  
  getDummyValue() {
    return Math.random().toString(36).substring(7);
  }
  getHeaderParams() : URLSearchParams {
    let params = new URLSearchParams();
//    params.set('uuid', this.global.uuid);
    params.set('token', this.getDummyValue());  // to avoid http caching
    return params;
  }
  public setParam(params:URLSearchParams, key:string, val:string) {
    if (val) {
      params.set(key, val);
    }
  }
      
  paramsToJson(params:URLSearchParams) : string {
    let entryMap = params.paramsMap.entries();
    let val = null, i = 0, jsonParams = '';
    while (val = entryMap.next().value) {
      if (i > 0) { jsonParams += ','; }
      jsonParams += ('"' + val[0] + '":"' + val[1] + '"'); 
      i++;
    }
    jsonParams = '{'+jsonParams+'}';
    return jsonParams;
  } 
     
  public testGoogleHome() {
    console.log('getData...');
    let url = 'http://google.com';
    url = "http://localhost:5000/BnrTransferCredits/institutions/";
      return this.http.get(url, {headers: this.getHeaders()})
      .map(res =>{
        console.log('res=' + res);
        if (res.status < 200 || res.status >= 300) {
          throw new Error('This request has failed ' + res.status);
        } else {
          return JSON.stringify(res.json());
        }
      });
  }
              
  public testMicroServiceAPI() {
    console.log('testMicroServiceAPI...');
    let url = "http://localhost:8080/api/test";
    	url = "http://localhost:5000/MQWebServices/api/test";
    	//url = "http://api.money.126.net/data/feed/0000001,1399001?callback=refreshPrice";
      return this.http.get(url,{ headers: this.getSecuredHeaders() })
      .map(res =>{
        console.log('res=' + res);
        if (res.status < 200 || res.status >= 300) {
          throw new Error('This request has failed ' + res.status);
        } else {
          return res;
        }
      });
  }

  public testFindOneAPI() {
    console.log('testMicroServiceAPI...');
    let url = "http://localhost:8080/api/findOne/2806";
    return this.http.get(url, { headers: this.getSecuredHeaders() })
      .map(res => {
        console.log('res=' + res);
        if (res.status < 200 || res.status >= 300) {
          throw new Error('This request has failed ' + res.status);
        } else {
          return JSON.stringify(res.json());
        }
      });
  }
  
  public testAPI() {
    console.log('getData...');
    let url = "http://samples.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b1b15e88fa797225412429c1c50c122a1";
    return this.http.get(url, { headers: this.getHeaders()})
      .map(res =>{
        console.log('res=' + res);
        if (res.status < 200 || res.status >= 300) {
          throw new Error('This request has failed ' + res.status);
        } else {
          return JSON.stringify(res.json());
        }
      });
  }               
}