import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { DeliveryType } from './delivery-type';

@Injectable({
  providedIn: 'root'
})
export class DeliveryTypeService {

  constructor(private http: HttpClient) { }

  look(): Observable<DeliveryType[]> {
    return this.http.get<DeliveryType[]>('ApiDeliveryTypes');
  }

  add(item: DeliveryType): Observable<Object> {
    return this.http.post('ApiDeliveryTypes', item);
  }

  update(item: DeliveryType): Observable<Object> {
    return this.http.put('ApiDeliveryTypes/' + item.ID, item);
  }

  delete(item: DeliveryType): Observable<Object> {
    return this.http.delete('ApiDeliveryTypes/' + item.ID);
  }
}
