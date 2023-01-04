import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ServeService } from 'src/app/Services/serve.service';

export interface Movies {
  ID: number,
  Title: string,
  File: string,
  Genre: string,
  Producer: string,
  Details: string
}

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private route: Router, private router: ActivatedRoute, private http: HttpClient, private service: ServeService) { }

  movies: Movies[] = [];
  ngOnInit(): void {
    this.http.get<{data: Movies[]}>('http://localhost:8080/Movies').subscribe(
        data => {
          this.movies = data.data;
          console.log(this.movies);
      });
  }
}
