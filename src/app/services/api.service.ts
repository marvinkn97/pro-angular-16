import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http = inject(HttpClient);
  constructor() {}

  add(url: string, data: any, headers?: {}) {
    this.http.post(url, data, headers);
  }
  update() {}
  delete() {}

  getAll(url: string): Observable<any[]> {
    return this.http.get<any[]>(url);
  }
  getById() {}
}
