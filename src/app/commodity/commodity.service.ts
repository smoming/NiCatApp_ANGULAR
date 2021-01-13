import { Injectable } from '@angular/core';
import { Commodity } from './commodity';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommodityService {

  constructor(private http: HttpClient) { }

  look(): Observable<Commodity[]> {
    return this.http.get<Commodity[]>('ApiCommodities/');
  }

  add(item: Commodity): Observable<Object> {
    return this.http.post('ApiCommodities/', item, { responseType: 'text' });
  }

  update(item: Commodity): Observable<Object> {
    return this.http.put('ApiCommodities/' + item.ID, item, { responseType: 'text' });
  }

  delete(item: Commodity): Observable<Object> {
    return this.http.delete('ApiCommodities/' + item.ID, { responseType: 'text' });
  }
}
