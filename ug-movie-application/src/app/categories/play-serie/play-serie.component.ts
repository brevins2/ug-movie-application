import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServeService } from 'src/app/Services/serve.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { Movies } from 'src/app/interface';

@Component({
  selector: 'app-play-serie',
  templateUrl: './play-serie.component.html',
  styleUrls: ['./play-serie.component.css']
})
export class PlaySerieComponent implements OnInit {

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
    this.route.navigate(['/cinema/all/series']);
  }

}
