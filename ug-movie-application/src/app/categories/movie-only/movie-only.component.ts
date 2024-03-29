import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ServeService } from 'src/app/services/serve.service';
import { Movies } from 'src/app/interface';

@Component({
  selector: 'app-movie-only',
  templateUrl: './movie-only.component.html',
  styleUrls: ['./movie-only.component.css']
})
export class MovieOnlyComponent implements OnInit {

  constructor(private route: Router, private router: ActivatedRoute, private http: HttpClient, private service: ServeService) { }
  movies: Movies[] = [];

  ngOnInit(): void {
    this.http.get<{data: Movies[]}>('http://localhost:8080/Movies').subscribe(data => {
      this.movies = data.data;
    });
  }

}
