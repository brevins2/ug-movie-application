import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

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
    this.http.get<any>('http://localhost:8080/Accounts').subscribe(res=>{
      console.log(res);
      if(this.loginForm.value.Email && this.loginForm.value.Password) {
        this.loginForm.reset();
        console.log(this.loginForm.value.Email, this.loginForm.value.Password);
      }
      else{
        alert("wrong input!!");
      }

    //   const user = res.find((a:any)=>{
    //     return a.Email === this.loginForm.value.Email &&
    //       a.Password === this.loginForm.value.Password
    //   });
    //   const admin = res.find(()=>{
    //     return 'admin@ug.com' === this.loginForm.value.Email &&
    //     'i83admin' === this.loginForm.value.Password
    //   });

    //   if(admin){
    //     // this.alert = true;
    //     this.loginForm.reset();
    //     this.router.navigate(['admin']);
    //   }
    //   else if (user) {
    //     // this.alert = true;
    //     // this.profile = user.email;
    //     this.loginForm.reset();
    //     this.router.navigate(['users']);
    //   }
    //   else{
    //     // this.alerts = true;
    //   }
    //   },
    //   error=>{
    //     // this.alerts = true;
    });
  }

}
