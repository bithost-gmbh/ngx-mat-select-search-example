import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class APIService {
  constructor(
    private http: HttpClient) {

  }

  const;
  baseUrl = 'http://localhost:3000';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  get(url: string, params: any): Observable<any> {
    let url_params = this.baseUrl + url;
    if (params) {
      url_params += '?';
      for (const param of params) {
        url_params += param.name + '=' + param.value + '&';
      }
    }
    return this.http.get<any[]>(url_params, this.httpOptions);
  }
}
