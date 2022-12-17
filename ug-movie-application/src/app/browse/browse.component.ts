import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  panelOpenState = false;

  messageFormGroup = this.formBuilder.group({
    Name: ['', Validators.required],
    Email: ['', Validators.required],
    Message: ['', Validators.required]
  });

  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
  }

  register() {
  	this.router.navigate(['subscribe']);
  }

  login() {
  	this.router.navigate(['login']);
  }

  sendMessage() {
    this.http.post<any>('http://localhost:8080/add/Message', this.messageFormGroup.value).subscribe(res=>{
      // console.log(res);
      this.messageFormGroup.reset();
    });
  }

}
