import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { render } from 'creditcardpayments/creditCardPayments';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  constructor() {
    render ({
      id: "#myPaypalButtons",
      currency: "USD",
      value: "100.00",
      onApprove: (details) => {
        alert("Transaction successful");
      }
    });
  }

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
