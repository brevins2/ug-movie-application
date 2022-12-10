import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})

export class SubscriptionComponent implements OnInit {

  paymentRequest={
      apiVersion: 2,
      apiVersionMinor: 0,
      allowedPaymentMethods: [
        {
          type: 'CARD',
          parameters: {
            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
            allowedCardNetworks: ['AMEX', 'VISA', 'MASTERCARD', 'PAYPAL', 'AIRTELMONEY', 'MOMO']
          },
          tokenizationSpecification: {
            type: 'PAYMENT_GATEWAY',
            parameters: {
              gateway: 'example',
              gatewayMerchantId: 'exampleGatewayMerchantId'
            }
          }
        },
        merchantInfo: {
          merchantId: '12345678901234567890',
          merchantName: 'Demo Merchant'
        },
        transactionInfo: {
          totalPriceStatus: 'FINAL',
          totalPriceLabel: 'Total',
          totalPrice: '100.00',
          currencyCode: 'SHS',
          countryCode: 'Ug'
        }
      ]
  }

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
      // console.log(res);
      this.firstFormGroup.reset();
    });
  }

  onLoadPaymentData(event: any){
    console.log("Load payment data", event.detail);
  }

}