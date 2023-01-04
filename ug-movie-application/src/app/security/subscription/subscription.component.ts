import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})

export class SubscriptionComponent implements OnInit {

  firstFormGroup = this.formBuilder.group({
    Email: ['', Validators.required],
    Password: ['', Validators.required],
    CPassword: ['', Validators.required],
    Name: ['', Validators.required],
    Username: ['', Validators.required],
    File: ['', Validators.required],
  });

  secondFormGroup = this.formBuilder.group({
    Payment: ['', Validators.required],
  });

  isEditable = false;
  hide = true;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
  }

  subscribe(){
     this.http.post<any>('http://localhost:8080/add/Account', this.firstFormGroup.value).subscribe(res=>{
      this.firstFormGroup.reset();
    });
  }
}