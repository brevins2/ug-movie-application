import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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
		Details: new FormControl('')
	});

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  save() {
    this.http.post<any>('http://localhost:8080/add/Movie', this.RegisterForm.value).subscribe(res=>{
      // console.log(res);
      this.RegisterForm.reset();
    });
  }
}
