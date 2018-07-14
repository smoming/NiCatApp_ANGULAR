import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ShipperQuery } from './shipper-query';
import { Shipper } from './shipper';
import { zipAll } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShipperService {

  constructor(private http: HttpClient) { }

  look(q: ShipperQuery): Observable<Shipper[]> {
    const params = new HttpParams()
      .set('StartDate', q.StartDate)
      .set('EndDate', q.EndDate)
      .set('Buyer', q.Buyer);
    return this.http.get<Shipper[]>('ApiShippers', { params });
  }

  add(transnos: string[]): Observable<Object> {
    return this.http.post('ApiShippers', transnos);
  }

  update(item: Shipper): Observable<Object> {
    return this.http.put('ApiShippers/' + item.TransNo, item);
  }

  delete(item: Shipper): Observable<Object> {
    return this.http.delete('ApiShippers/' + item.TransNo);
  }
}
