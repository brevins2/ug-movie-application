import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
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
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  UpdateMovie = new FormGroup({
    Title: new FormControl(''),
    File: new FormControl(''),
    Genre: new FormControl(''),
    Producer: new FormControl(''),
    Details: new FormControl('')
  });
  movies: Movies[] = [];

  constructor(private http: HttpClient, private router: ActivatedRoute, private route: Router, private serve: ServeService) { }

  ngOnInit(): void {
    this.getCurrentMovie();
  }

  getCurrentMovie() {
    this.serve.getWithID(this.router.snapshot.params['id']).subscribe((result: any) => {
      this.movies = result.data;
      this.UpdateMovie = new FormGroup({
        Title: new FormControl(result['Title']),
        Genre: new FormControl(result['Genre']),
        Producer: new FormControl(result['Producer']),
        File: new FormControl(result['File']),
        Details: new FormControl(result['Details'])
      });
    });
  }

  close() {
    this.route.navigate(['/developer/edits/moviesedits']);
  }

  Update() {
    this.serve.update(this.router.snapshot.params['id'], this.UpdateMovie.value).subscribe((result) => {
      this.UpdateMovie.reset();
      return result;
    });
  }

  Clear() {}
}