import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Receipt } from './receipt';
import { ReceiptQuery } from './receipt-query';
import { Extension } from '../extension';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {

  constructor(private http: HttpClient) { }

  look(q: ReceiptQuery): Observable<Receipt[]> {
    const params = new HttpParams()
      // .set('StartDate', q.StartDate)
      // .set('EndDate', q.EndDate);
      .set('StartDate', Extension.toDateStr(new Date(q.StartDate)))
      .set('EndDate', Extension.toDateStr(new Date(q.EndDate)));
    return this.http.get<Receipt[]>('ApiReceipt/', { params });
  }

  add(transnos: string[]): Observable<Object> {
    return this.http.post('ApiReceipt/', transnos, { responseType: 'text' });
  }

  update(item: Receipt): Observable<Object> {
    return this.http.put('ApiReceipt/' + item.TransNo, item, { responseType: 'text' });
  }

  delete(item: Receipt): Observable<Object> {
    return this.http.delete('ApiReceipt/' + item.TransNo, { responseType: 'text' });
  }
}
