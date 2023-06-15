import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { ServeService } from 'src/app/services/serve.service';
import { Genre, Producer, Images } from 'src/app/interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent implements OnInit {

	RegisterForm = new FormGroup({
		Title: new FormControl(''),
		File: new FormControl(''),
    URL: new FormControl(''),
		Genre: new FormControl(''),
		Producer: new FormControl(''),
		Details: new FormControl(''),
    Category: new FormControl('')
	});
  genres: Genre[] = [];
  producers: Producer[] = [];
  images: Images[] = [];
  selectedFile!: File;
  File = '';
  URL = '';

  constructor(private http: HttpClient, private router: ActivatedRoute, private route: Router, private serve: ServeService) {
  }

  ngOnInit(): void {
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

  save() {
    this.http.post<any>('http://localhost:8080/add/Movie', this.RegisterForm.value).subscribe(res=>{
      this.RegisterForm.reset();
      this.route.navigate(['/developer/edits/moviesedits']);
    });
  }
}