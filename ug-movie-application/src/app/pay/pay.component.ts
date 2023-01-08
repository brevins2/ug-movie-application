import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

    firstFormGroup = new FormGroup({
      firstCtrl: new FormControl('', Validators.required)
    });
    secondFormGroup = new FormGroup({
      secondCtrl: new FormControl('', Validators.required)
    });
    isLinear = false;

}
