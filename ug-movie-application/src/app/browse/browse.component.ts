import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ServeService } from 'src/app/services/serve.service';
import { Message } from 'src/app/interface';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  panelOpenState = false;
  messages: Message[] = [];
  messageFormGroup = this.formBuilder.group({
    Name: ['', Validators.required],
    Email: ['', Validators.required],
    Message: ['', Validators.required]
  });

  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private serve: ServeService) { }

  ngOnInit(): void {
  }

  register() {
  	this.router.navigate(['subscribe']);
  }

  login() {
  	this.router.navigate(['login']);
  }

  sendMessage() {
    this.serve.createMessage(this.messageFormGroup.value).subscribe(res=>{
      this.messageFormGroup.reset();
    });
  }
}
