import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ServeService } from 'src/app/Services/serve.service';
import { Genre, Producer, Images } from 'src/app/interface';

@Component({
  selector: 'app-registerproducer',
  templateUrl: './registerproducer.component.html',
  styleUrls: ['./registerproducer.component.css']
})
export class RegisterproducerComponent implements OnInit {

  constructor(private http: HttpClient, private serve: ServeService) { }

  RegisterForm = new FormGroup({
    Name: new FormControl(''),
  	Email: new FormControl(''),
    Genre: new FormControl(''),
    File: new FormControl(''),
    URL: new FormControl('')
  });
  genres: Genre[] = [];
  images: Images[] = [];
  File = '';
  selectedCities = {};

  ngOnInit(): void {
    this.serve.getAllGenres().subscribe(data => {
      this.genres = data.data;
    });

    this.serve.getFiles().subscribe(data => {
      this.images = data.data;
    });
  }

  register (){
  	this.http.post<any>('http://localhost:8080/add/Producer', this.RegisterForm.value).subscribe(res => {
      this.RegisterForm.reset();
    });
  }
}