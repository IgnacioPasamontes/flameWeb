import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  /**
   * Retrives the list of all models form the server
   */
  getModelList(): Observable<any> {
    const url: string = environment.baseUrl_manage + 'models';
    return this.http.get(url);
  }

  getModel(model: string, version: string): Observable<any> {
    const url: string = environment.baseUrl_manage + 'model/' + model + '/version/' + version;
    return this.http.get(url);
  }
}
