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

export interface Producer {
  ID: number,
  Name: string,
  Email: string,
  Genre: string,
  File: string,
  Password: string,
  CPassword: string,
}

  const baseurl = "http://localhost:8080/Movies";
  const baseurlProducer = "http://localhost:8080/Producers";

@Injectable({
  providedIn: 'root'
})

export class ServeService {

  constructor(private http: HttpClient) { }

  // for movies
  getAll(): Observable<Movies[]> {
    return this.http.get<Movies[]>('http://localhost:8080/Movies');
  }

  getWithID(id: number): Observable<{data: Movies[]}> {
    return this.http.get<{data: Movies[]}>(`${baseurl}/${id}`);
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

  deleteAll(): Observable<any> {
    return this.http.delete('http://localhost:8080/Movies');
  }

  findByTitle(title: any): Observable<Movies[]> {
    return this.http.get<Movies[]>(`${'http://localhost:8080/Movies'}?title=${title}`);
  }


  // for producers
  getAllProducers(): Observable<{data: Producer[]}> {
    return this.http.get<{data: Producer[]}>('http://localhost:8080/Producers');
  }

  getProducerWithID(id: number): Observable<{data: Producer[]}> {
    return this.http.get<{data: Producer[]}>(`${baseurlProducer}/${id}`);
  }

  createProducer(data: any): Observable<any> {
    return this.http.post('http://localhost:8080/add/Producers', data);
  }

  updateProducer(id: any, data: any): Observable<any> {
    return this.http.put(`${'http://localhost:8080/update/Producers/:id'}/${id}`, data);
  }

  deleteProducer(id: any): Observable<any> {
    return this.http.delete(`${'http://localhost:8080/delete/Producers/:id'}/${id}`);
  }

  deleteAllProducers(): Observable<any> {
    return this.http.delete('http://localhost:8080/Producers');
  }

  findByTitleProducers(title: any): Observable<Movies[]> {
    return this.http.get<Movies[]>(`${'http://localhost:8080/Producers'}?title=${title}`);
  }
}
