import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ServeService } from 'src/app/services/serve.service';
import { Movies, Genre, Producer, Images } from 'src/app/interface';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  UpdateMovie = new FormGroup({
    Title: new FormControl(''),
    File: new FormControl(''),
    URL: new FormControl(''),
    Genre: new FormControl(''),
    Producer: new FormControl(''),
    Details: new FormControl(''),
    Category: new FormControl('')
  });
  movies: Movies[] = [];
  genres: Genre[] = [];
  producers: Producer[] = [];
  images: Images[] = [];
  File = '';
  URL = '';

  constructor(private http: HttpClient, private router: ActivatedRoute, private route: Router, private serve: ServeService) { }

  ngOnInit(): void {
    this.getCurrentMovie();

    this.serve.getAllGenres().subscribe(data => {
      this.genres = data.data;
    });

    this.serve.getAllProducers().subscribe(data => {
      this.producers = data.data;
    });

    this.serve.getFiles().subscribe(data => {
      this.images = data.data;
    });
  }

  getCurrentMovie() {
    this.serve.getWithID(this.router.snapshot.params['id']).subscribe((result: any) => {
      let x = result.data;
      x.forEach((element: any) => {
        this.UpdateMovie = new FormGroup({
          Title: new FormControl(element['Title']),
          File: new FormControl(element['File']),
          URL: new FormControl(element['URL']),
          Genre: new FormControl(element['Genre']),
          Producer: new FormControl(element['Producer']),
          Details: new FormControl(element['Details']),
          Category: new FormControl(element['Category'])
        });
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

  Clear() {
    this.UpdateMovie.reset();
  }

  Delete() {
    this.serve.deleteUser(this.router.snapshot.params['id']).subscribe((response)=> {
      this.movies = response.data;
      this.close();
    });
  }
}