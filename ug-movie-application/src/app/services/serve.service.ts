import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, Message, Movies, Producer, Genre } from 'src/app/interface';

  const baseurlMovies = "http://localhost:8080/Movies";
  const baseurlProducer = "http://localhost:8080/Producers";
  const baseurlCustomer = "http://localhost:8080/Accounts";
  const baseurlMessages = "http://localhost:8080/Message";
  const Genres = "http://localhost:8080/Genre";

@Injectable({
  providedIn: 'root'
})

export class ServeService {

  constructor(private http: HttpClient) { }

  // for genre
  getAllGenres(): Observable<{data: Genre[]}> {
    return this.http.get<{data: Genre[]}>('http://localhost:8080/Genre');
  }

  // for accounts
  getAllUsers(): Observable<{data: User[]}> {
    return this.http.get<{data: User[]}>('http://localhost:8080/Accounts');
  }

  getUserWithID(id: number): Observable<{data: User[]}> {
    return this.http.get<{data: User[]}>(`${baseurlCustomer}/${id}`);
  }

  createUser(data: any): Observable<any> {
    return this.http.post('http://localhost:8080/add/Account', data);
  }

  updateUser(id: any, data: any): Observable<any> {
    return this.http.put(`${baseurlCustomer}/${id}`, data);
  }

  deleteUser(id: any): Observable<any> {
    return this.http.delete(`${baseurlCustomer}/${id}`);
  }

  deleteAllUsers(): Observable<any> {
    return this.http.delete('http://localhost:8080/delete/Account');
  }

  findByUserName(name: string): Observable<{data: User[]}> {
    return this.http.get<{data: User[]}>(`${baseurlCustomer}?Name=${name}`);
  }


  // for movies
  getAll(): Observable<{data: Movies[]}> {
    return this.http.get<{data: Movies[]}>('http://localhost:8080/Movies');
  }

  getWithID(id: number): Observable<{data: Movies[]}> {
    return this.http.get<{data: Movies[]}>(`${baseurlMovies}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post('http://localhost:8080/add/Movie', data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseurlMovies}/${id}`, data);
  }

  deleteMovie(id: any): Observable<Movies[]> {
    return this.http.delete<Movies[]>(`${baseurlMovies}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete('http://localhost:8080/Movies');
  }

  findByTitle(title: any): Observable<{data: Movies[]}> {
    return this.http.get<{data: Movies[]}>(`${baseurlMovies}?Title=${title}`);
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
    return this.http.put(`${baseurlProducer}/${id}`, data);
  }

  deleteProducer(id: any): Observable<any> {
    return this.http.delete(`${baseurlProducer}/${id}`);
  }

  deleteAllProducers(): Observable<any> {
    return this.http.delete('http://localhost:8080/Producers');
  }

  findByNameProducers(name: any): Observable<{data: Producer[]}> {
    return this.http.get<{data: Producer[]}>(`${baseurlProducer}?Name=${name}`);
  }


  // for Messages
  getAllMessages(): Observable<{data: Message[]}> {
    return this.http.get<{data: Message[]}>('http://localhost:8080/Message');
  }

  getMessageWithID(id: number): Observable<{data: Message[]}> {
    return this.http.get<{data: Message[]}>(`${baseurlMessages}/${id}`);
  }

  createMessage(data: any): Observable<any> {
    return this.http.post('http://localhost:8080/add/Message', data);
  }

  updateMessage(id: any, data: any): Observable<any> {
    return this.http.put(`${baseurlMessages}/${id}`, data);
  }

  deleteMessage(id: any): Observable<any> {
    return this.http.delete(`${baseurlMessages}/${id}`);
  }

  deleteAllMessages(): Observable<any> {
    return this.http.delete('http://localhost:8080/Messages');
  }

  findByTitleMessage(email: any): Observable<{data: Message[]}> {
    return this.http.get<{data: Message[]}>(`${baseurlMessages}?Email=${email}`);
  }
}
