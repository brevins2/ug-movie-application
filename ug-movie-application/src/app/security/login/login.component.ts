import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ServeService } from '../../services/serve.service';
import { User } from 'src/app/interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authForm!: FormGroup;
  isSubmitted = false;
  hide = true;
  alert = false;
  alerts = false;
  customer: User[] = [];

  loginForm =  this.formBuilder.group({
    Email: ['', Validators.required],
    Password: ['', Validators.required]
  });

  constructor(private route: Router, private router: ActivatedRoute, 
    private formBuilder: FormBuilder, private http: HttpClient, private serve: ServeService) { }

  ngOnInit(): void {
    this.authForm = this.formBuilder.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required]
    });

    this.loginForm;
  }

  closeAlert(){
    this.alert = false;
  }

  closeDangerAlert() {
    this.alerts = false;
  }

  BackHome(){
    this.route.navigate(['cinema/browse']);
  }

  login() {
    this.http.get<{data: User[]}>('http://localhost:8080/Accounts').subscribe(res=>{
      this.customer = res.data;

      const user = this.customer.find((a: any)=>{
        return a.Email == this.loginForm.value.Email &&
          a.Password == this.loginForm.value.Password;
      });

      if ('admin@gmail.com' == this.loginForm.value.Email &&
          'i83admin' == this.loginForm.value.Password) {
        this.alert = true;
        this.loginForm.reset();
        this.route.navigate(['/developer/edits']);
      }

      else if(user){
        this.alert = true;
        this.loginForm.reset();
        this.route.navigate(['/cinema/all/all']);
      }
      else{
        this.alerts = true;
      }
    },
    error=>{
      this.alerts = true;
    });
  }
}
