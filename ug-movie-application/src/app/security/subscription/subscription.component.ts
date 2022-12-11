import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Flutterwave, InlinePaymentOptions, PaymentSuccessResponse } from "flutterwave-angular-v3";

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})

export class SubscriptionComponent implements OnInit {

  publicKey = "FLWPUBK_TEST-XXXXX-X";

  customerDetails = {
    name: "Demo Customer Name",
    email: "customer@mail.com",
    phone_number: "08100000000",
  };

  customizations = {
    title: "Customization Title",
    description: "Customization Description",
    logo: "https://flutterwave.com/images/logo-colored.svg",
  };

  meta = { counsumer_id: "7898", consumer_mac: "kjs9s8ss7dd" };

  paymentRequest = {
      apiVersion: 2,
      apiVersionMinor: 0,
      allowedPaymentMethods: [
        {
          type: 'CARD',
          parameters: {
            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
            allowedCardNetworks: ['AMEX', 'VISA', 'MASTERCARD', 'PAYPAL', 'AIRTELMONEY', 'MOMO'],
          },
          tokenizationSpecification: {
            type: 'PAYMENT_GATEWAY',
            parameters: {
              gateway: 'example',
              gatewayMerchantId: 'exampleGatewayMerchantId',
            }
          }
        }
      ],
        merchantInfo: {
          merchantId: '12345678901234567890',
          merchantName: 'Demo Merchant',
        },
        transactionInfo: {
          totalPriceStatus: 'FINAL',
          totalPriceLabel: 'Total',
          totalPrice: '100.00',
          currencyCode: 'SHS',
          countryCode: 'Ug'
        }
  };

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

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private flutterwave: Flutterwave) { }

  ngOnInit(): void {
  }

   makePaymentCallback(response: PaymentSuccessResponse): void {
    console.log("Pay", response);
    this.flutterwave.closePaymentModal(5);
  }
  closedPaymentModal(): void {
    console.log("payment is closed");
  }
  generateReference(): string {
    let date = new Date();
    return date.getTime().toString();
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