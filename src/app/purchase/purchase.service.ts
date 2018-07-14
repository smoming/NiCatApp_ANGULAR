import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Purchase } from './purchase';
import { PurchaseQuery } from './purchase-query';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(private http: HttpClient) { }

  look(q: PurchaseQuery): Observable<Purchase[]> {
    const params = new HttpParams()
      .set('StartDate', q.StartDate)
      .set('EndDate', q.EndDate);
    return this.http.get<Purchase[]>('ApiPurchase', { params });
  }

  add(transnos: string[]): Observable<Object> {
    return this.http.post('ApiPurchase', transnos);
  }

  update(item: Purchase): Observable<Object> {
    return this.http.put('ApiPurchase/' + item.TransNo, item);
  }

  delete(item: Purchase): Observable<Object> {
    return this.http.delete('ApiPurchase/' + item.TransNo);
  }
}
