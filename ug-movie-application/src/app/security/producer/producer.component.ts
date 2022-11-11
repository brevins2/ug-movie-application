import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producer',
  templateUrl: './producer.component.html',
  styleUrls: ['./producer.component.css']
})
export class ProducerComponent implements OnInit {

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
  	this.http.post<any>('http://localhost:3000/Producer', this.RegisterForm.value).subscribe(res => {
      // console.log(res);
      this.RegisterForm.reset();
    });
  }
}