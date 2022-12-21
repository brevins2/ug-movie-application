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
    this.http.get<any>('http://localhost:8080/Account').subscribe(res=>{
      console.log(res);
      this.loginForm.reset();
    });
  }

}
