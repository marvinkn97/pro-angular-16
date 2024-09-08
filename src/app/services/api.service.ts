import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http = inject(HttpClient);
  constructor() {}

  add(url: string, data: any, options?: {}) {
    this.http.post(url, data);
  }
  update() {}
  delete() {}
  getAll() {}
  getById() {}
}
