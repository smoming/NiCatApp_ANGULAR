import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Receipt } from './receipt';
import { ReceiptQuery } from './receipt-query';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {

  constructor(private http: HttpClient) { }

  look(q: ReceiptQuery): Observable<Receipt[]> {
    const params = new HttpParams()
      .set('StartDate', q.StartDate)
      .set('EndDate', q.EndDate);
    return this.http.get<Receipt[]>('ApiReceipt', { params });
  }

  add(transnos: string[]): Observable<Object> {
    return this.http.post('ApiReceipt', transnos);
  }

  update(item: Receipt): Observable<Object> {
    return this.http.put('ApiReceipt/' + item.TransNo, item);
  }

  delete(item: Receipt): Observable<Object> {
    return this.http.delete('ApiReceipt/' + item.TransNo);
  }
}
