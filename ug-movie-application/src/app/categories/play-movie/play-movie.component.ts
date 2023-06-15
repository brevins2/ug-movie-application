import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServeService } from 'src/app/services/serve.service';
import { HttpClient } from '@angular/common/http';
import { Movies } from 'src/app/interface';

@Component({
  selector: 'app-play-movie',
  templateUrl: './play-movie.component.html',
  styleUrls: ['./play-movie.component.css']
})
export class PlayMovieComponent implements OnInit {

  movies: Movies[] = [];
  constructor(private router: ActivatedRoute, private route: Router, private http: HttpClient, private service: ServeService) { }

  ngOnInit(): void {
    this.getMovieByID(this.router.snapshot.params['id']);
  }

  getMovieByID(ID: number) {
    this.service.getWithID(ID).subscribe(data =>{
        this.movies = data.data;
    });
  }

  back() {
    this.route.navigate(['/cinema/all/all']);
  }
}