import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Order } from './order';
import { OrderQuery } from './order-query';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  look(q: OrderQuery): Observable<Order[]> {
    const params = new HttpParams()
      .set('StartDate', q.StartDate)
      .set('EndDate', q.EndDate)
      .set('CommodityID', q.CommodityID)
      .set('ReceiptNo', q.ReceiptNo);
    return this.http.get<Order[]>('ApiOrders', { params });
  }

  getUnPaid(): Observable<Order[]> {
    return this.http.get<Order[]>('ApiOrders/GetUnPaid');
  }

  getUnPurchase(): Observable<Order[]> {
    return this.http.get<Order[]>('ApiOrders/GetUnPurchase');
  }

  add(item: Order): Observable<Object> {
    return this.http.post('ApiOrders', item);
  }

  update(item: Order): Observable<Object> {
    return this.http.put('ApiOrders/' + item.TransNo, item);
  }

  delete(item: Order): Observable<Object> {
    return this.http.delete('ApiOrders/' + item.TransNo);
  }
}
