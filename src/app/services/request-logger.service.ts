import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestLogger } from '../models/request-logger';
import { Observable } from 'rxjs';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RequestLoggerService {

  httpParams = new HttpParams();

  constructor(private http: HttpClient) { }

  public getRequestLogs(desde:string | null, hasta:string | null): Observable<RequestLogger[]> {
    let params = new HttpParams();
        
    if(desde != null) 
      params = params.append('desde', formatDate(desde, "yyyy-MM-dd", 'en-US'));

      if(hasta != null) 
      params = params.append('hasta',  formatDate(hasta, "yyyy-MM-dd", 'en-US'));
    
    return this.http.get<RequestLogger[]>('https://karlus-dev-public-services-app.azurewebsites.net/api/Consult/request-log', {params})
  }

}
