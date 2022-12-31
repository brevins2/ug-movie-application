import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Movies {
  ID: number,
  Title: string,
  File: string,
  Genre: string,
  Producer: string,
  Details: string
}


@Injectable({
  providedIn: 'root'
})

export class ServeService {

  constructor(private http: HttpClient) { }

  // for movies
  getAll(): Observable<Movies[]> {
    return this.http.get<Movies[]>('http://localhost:8080/Movies');
  }

  get(id: any): Observable<Movies> {
    return this.http.get<Movies>(`http://localhost:8080/Movies/:id${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post('http://localhost:8080/add/Movie', data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${'http://localhost:8080/update/Movies/:id'}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${'http://localhost:8080/delete/Movies/:id'}/${id}`);
  }

  // deleteAll(): Observable<any> {
  //   return this.http.delete('http://localhost:8080/Movies');
  // }

  // findByTitle(title: any): Observable<Movies[]> {
  //   return this.http.get<Movies[]>(`${'http://localhost:8080/Movies'}?title=${title}`);
  // }
}
