import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Supplier } from './supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private http: HttpClient) { }

  look(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>('ApiSuppliers');
  }

  add(item: Supplier): Observable<Object> {
    return this.http.post('ApiSuppliers', item);
  }

  update(item: Supplier): Observable<Object> {
    return this.http.put('ApiSuppliers/' + item.ID, item);
  }

  delete(item: Supplier): Observable<Object> {
    return this.http.delete('ApiSuppliers/' + item.ID);
  }
}
