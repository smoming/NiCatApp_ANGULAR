import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Trading } from './trading';
import { TradingQuery } from './trading-query';
import { Extension } from '../extension';

@Injectable({
  providedIn: 'root'
})
export class TradingService {

  constructor(private http: HttpClient) { }

  look(q: TradingQuery): Observable<Trading[]> {
    const params = new HttpParams()
      // .set('StartDate', q.StartDate)
      // .set('EndDate', q.EndDate)
      .set('StartDate', Extension.toDateStr(new Date(q.StartDate)))
      .set('EndDate', Extension.toDateStr(new Date(q.EndDate)))
      .set('Buyer', q.Buyer)
      .set('CommodityID', q.CommodityID);
    return this.http.get<Trading[]>('ApiTradings', { params });
  }

  GetUnShipped(xBuyer: string): Observable<Trading[]> {
    const params = new HttpParams()
      .set('Buyer', xBuyer);
    return this.http.get<Trading[]>('ApiTradings/GetUnShipped', { params });
  }

  add(item: Trading): Observable<Object> {
    return this.http.post('ApiTradings', item, { responseType: 'text' });
  }

  update(item: Trading): Observable<Object> {
    return this.http.put('ApiTradings/' + item.TransNo, item, { responseType: 'text' });
  }

  delete(item: Trading): Observable<Object> {
    return this.http.delete('ApiTradings/' + item.TransNo, { responseType: 'text' });
  }
}
