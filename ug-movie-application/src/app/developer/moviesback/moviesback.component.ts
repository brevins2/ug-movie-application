import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Movies {
    ID: number,
    Title: string,
    File: string,
    Genre: string,
    Producer: string,
    Details: string
}

@Component({
  selector: 'app-moviesback',
  templateUrl: './moviesback.component.html',
  styleUrls: ['./moviesback.component.css']
})
export class MoviesbackComponent implements OnInit {

  movies: Movies[] = [];
  displayedColumns: string[] = ['ID', 'Title', 'File', 'Genre', 'Producer', 'Details', 'Edit', 'Delete'];
    dataSource = this.movies;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<{data: Movies[]}>('http://localhost:8080/Movies').subscribe(
        data => {
          this.movies = data.data;
          this.dataSource = this.movies;
          console.log(this.movies);
      });
  }

}
