import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})

export class SubscriptionComponent implements OnInit {

  firstFormGroup = new FormGroup({
    name: new FormControl(''),
    Username: new FormControl(''),
    email: new FormControl(''),
    file: new FormControl(''),
    password: new FormControl(''),
    confrimpassword: new FormControl('')
  });

  // firstFormGroup

  secondFormGroup = new FormGroup({
    payement: new FormControl('')
  });

  isEditable = true;

  constructor(private _formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
  }

}