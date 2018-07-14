import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CashFlowService {

  constructor(private http: HttpClient) { }

  account(exeDate: string): Observable<Object> {
    return this.http.post('ApiCashFlow/DoAccound?xExeDate=' + exeDate, null);
  }

  unaccount(exeDate: string): Observable<Object> {
    return this.http.post('ApiCashFlow/DoUnAccound?xExeDate=' + exeDate, null);
  }
}
