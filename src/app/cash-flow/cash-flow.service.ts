import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Extension } from '../extension';

@Injectable({
  providedIn: 'root'
})
export class CashFlowService {

  constructor(private http: HttpClient) { }

  account(exeDate: string): Observable<Object> {
    return this.http.post('ApiCashFlow/DoAccound?xExeDate=' +
      Extension.toDateStr(new Date(exeDate)), null, { responseType: 'text' });
  }

  unaccount(exeDate: string): Observable<Object> {
    return this.http.post('ApiCashFlow/DoUnAccound?xExeDate=' +
      Extension.toDateStr(new Date(exeDate)), null, { responseType: 'text' });
  }
}
