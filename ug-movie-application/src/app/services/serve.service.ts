import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export class Accounts {
  ID?: any;
  Name?: string;
  Username?: string;
  Email?: string;
  File?: string;
  Password?: string;
  CPassword?: string;
}


@Injectable({
  providedIn: 'root'
})

export class ServeService {

  constructor(private http: HttpClient) { }

  // for genre
  getAll(): Observable<Accounts[]> {
    return this.http.get<Genre[]>('http://localhost:8080/Accounts');
  }

  get(id: any): Observable<Genre> {
    return this.http.get<Genre>(`http://localhost:8080/Accounts/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(`${baseUrl}?title=${title}`);
  }
}
