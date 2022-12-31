import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServeService } from 'src/app/Services/serve.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

export interface Movies {
  ID: number,
  Title: string,
  File: string,
  Genre: string,
  Producer: string,
  Details: string
}

@Component({
  selector: 'app-play-movie',
  templateUrl: './play-movie.component.html',
  styleUrls: ['./play-movie.component.css']
})
export class PlayMovieComponent implements OnInit {

  constructor(private router: ActivatedRoute, private route: Router, private http: HttpClient, private service: ServeService,) { }

  ngOnInit(): void {
    this.http.get<{data: Movies[]}>('http://localhost:8080/Movies', this.router.snapshot.params['id']).subscribe(
      data => {
        // this.movies = data.data;
        console.log(this.movies);
    });
  }
}