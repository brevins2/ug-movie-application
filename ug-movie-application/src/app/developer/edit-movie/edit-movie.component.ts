import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ServeService } from 'src/app/Services/serve.service';
import { Movies } from 'src/app/interface';

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
    Details: new FormControl(''),
    Category: new FormControl('')
  });
  movies: Movies[] = [];
  displayedColumns: string[] = ['Title', 'File', 'Genre', 'Producer', 'Details', 'Category', 'Delete'];
    dataSource = this.movies;

  constructor(private http: HttpClient, private router: ActivatedRoute, private route: Router, private serve: ServeService) { }

  ngOnInit(): void {
    this.getCurrentMovie();
  }

  getCurrentMovie() {
    this.serve.getWithID(this.router.snapshot.params['id']).subscribe((result: any) => {
      this.movies = result.data;
      this.dataSource = this.movies;
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

  Clear() {
    this.UpdateMovie.reset();
  }

  Delete() {
    this.serve.deleteUser(this.router.snapshot.params['id']).subscribe((response)=> {
      this.movies = response.data;
      console.log(response); 
    });
  }
}