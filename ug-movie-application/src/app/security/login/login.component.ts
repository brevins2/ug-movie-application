import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

export interface Customers{
  ID: number,
  Name: string,
  Username: string,
  Email: string,
  File: string,
  Password: string,
  CPassword: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  customer: Customers[] = [];
  loginForm =  this.formBuilder.group({
    Email: ['', Validators.required],
    Password: ['', Validators.required]
  });

  constructor(private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
  }

  BackHome(){
    this.router.navigate(['cinema/browse']);
  }

  login() {
    this.http.get<{data: Customers[]}>('http://localhost:8080/Accounts/login').subscribe(res=>{

      // this.customer.forEach((value) =>{
      //   if (this.loginForm.value.Email == res.data[value].Email && this.loginForm.value.Password == res.data[value].Password){
      //     console.log(this.loginForm.value.Email +", "+ this.loginForm.value.Password);
      //     console.log("well done");
      //   }else {
      //     console.log("error occured");
      //   }
      //   console.log(value);
      // });
      for(var i = 0; i <= this.customer.length; i++){
        if (this.loginForm.value.Email == res.data[i].Email && this.loginForm.value.Password == res.data[i].Password){
          console.log(this.loginForm.value.Email +", "+ this.loginForm.value.Password);
          console.log("well done");
        }else {
          console.log("error occured");
        }
      }
    });
  }

}
