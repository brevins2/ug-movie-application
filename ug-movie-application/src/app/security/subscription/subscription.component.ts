import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})

export class SubscriptionComponent implements OnInit {

  firstFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
  });

  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  isEditable = true;

  constructor(private _formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
  }

}