import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerproducer',
  templateUrl: './registerproducer.component.html',
  styleUrls: ['./registerproducer.component.css']
})
export class RegisterproducerComponent implements OnInit {

  constructor(private http: HttpClient) { }

  RegisterForm = new FormGroup({
    name: new FormControl(''),
  	email: new FormControl(''),
    thriller: new FormControl(''),
    Romance: new FormControl(''),
    Inspirarional: new FormControl(''),
    Horror: new FormControl(''),
    Action: new FormControl(''),
    Animation: new FormControl(''),
    Documentaries: new FormControl(''),
    Reality: new FormControl(''),
    Series: new FormControl(''),
    SciFi: new FormControl(''),
    Supernatural: new FormControl(''),
    Comedies: new FormControl(''),
    File: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    file: new FormControl('')
  });

  ngOnInit(): void {
  }

  well (){
  	this.http.post<any>('http://localhost:8080/add/Producer', this.RegisterForm.value).subscribe(res => {
      // console.log(res);
      this.RegisterForm.reset();
    });
  }
}