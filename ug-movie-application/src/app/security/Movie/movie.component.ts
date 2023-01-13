import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { ServeService } from 'src/app/Services/serve.service';
import { Genre, Producer } from 'src/app/interface';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent implements OnInit {

	RegisterForm = new FormGroup({
		Title: new FormControl(''),
		File: new FormControl(''),
		Genre: new FormControl(''),
		Producer: new FormControl(''),
		Details: new FormControl(''),
    Category: new FormControl('')
	});
  genres: Genre[] = [];
  producers: Producer[] = [];
  selectedFile!: File; 

  constructor(private http: HttpClient, private serve: ServeService) {
  }

  ngOnInit(): void {
    this.serve.getAllGenres().subscribe(data => {
      this.genres = data.data;
    });

    this.serve.getAllProducers().subscribe(data => {
      this.producers = data.data;
    });
  }

  onFileUpload(event: any){
    this.selectedFile = <File>event.target.files[0];
    this.RegisterForm.patchValue({
      // fileSource : File
    });
  }

  get f(){
    return this.RegisterForm.controls;
}

  save() {
    this.http.post<any>('http://localhost:8080/add/Movie', this.RegisterForm.value).subscribe(res=>{
      this.RegisterForm.reset();
    });
  }
}
