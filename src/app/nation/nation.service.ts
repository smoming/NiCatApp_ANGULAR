import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Nation } from './nation';

@Injectable({
  providedIn: 'root'
})
export class NationService {

  constructor(private http: HttpClient) { }

  look(): Observable<Nation[]> {
    return this.http.get<Nation[]>('ApiNation');
  }

  add(item: Nation): Observable<Object> {
    return this.http.post('ApiNation', item, { responseType: 'text' });
  }

  update(item: Nation): Observable<Object> {
    return this.http.put('ApiNation/' + item.ID, item, { responseType: 'text' });
  }

  delete(item: Nation): Observable<Object> {
    return this.http.delete('ApiNation/' + item.ID, { responseType: 'text' });
  }
}
