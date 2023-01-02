import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

export interface Messages {
  ID: number,
  Name: string,
  Email: string,
  Message: string
}

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  panelOpenState = false;
  messages: Messages[] = [];

  messageFormGroup = this.formBuilder.group({
    Name: ['', Validators.required],
    Email: ['', Validators.required],
    Message: ['', Validators.required]
  });

  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.readMessage();
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

  readMessage() {
    this.http.get<{data: Messages[]}>('http://localhost:8080/Message').subscribe(res => {
      this.messages = res.data;
      console.log(this.messages);
      console.log(res);
    });
  }

}
