import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Movies{
  constructor(
    public ID: number,
    public Title: string,
    public File: string,
    public Genre: string,
    public Producer: string,
    public Details: string
  ){}
}

@Component({
  selector: 'app-moviesback',
  templateUrl: './moviesback.component.html',
  styleUrls: ['./moviesback.component.css']
})
export class MoviesbackComponent implements OnInit {

  movies: Movies[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(){
    this.http.get<any>('http://localhost:8080/Movies').subscribe(
      response=>{
        this.movies = response;
        console.log(response);
      });
  }

}
