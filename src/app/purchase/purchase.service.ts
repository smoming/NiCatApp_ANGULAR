import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Purchase } from './purchase';
import { PurchaseQuery } from './purchase-query';
import { Extension } from '../extension';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(private http: HttpClient) { }

  look(q: PurchaseQuery): Observable<Purchase[]> {
    const params = new HttpParams()
      // .set('StartDate', q.StartDate)
      // .set('EndDate', q.EndDate);
      .set('StartDate', Extension.toDateStr(new Date(q.StartDate)))
      .set('EndDate', Extension.toDateStr(new Date(q.EndDate)));
    return this.http.get<Purchase[]>('ApiPurchase/', { params });
  }

  add(transnos: string[]): Observable<Object> {
    return this.http.post('ApiPurchase/', transnos, { responseType: 'text' });
  }

  update(item: Purchase): Observable<Object> {
    return this.http.put('ApiPurchase/' + item.TransNo, item, { responseType: 'text' });
  }

  delete(item: Purchase): Observable<Object> {
    return this.http.delete('ApiPurchase/' + item.TransNo, { responseType: 'text' });
  }
}
