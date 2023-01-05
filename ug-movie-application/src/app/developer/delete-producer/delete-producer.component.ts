import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-producer',
  templateUrl: './delete-producer.component.html',
  styleUrls: ['./delete-producer.component.css']
})
export class DeleteProducerComponent implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  DeleteProducer = new FormGroup({
    ID: new FormControl(''),
    Name: new FormControl(''),
    Username: new FormControl(''),
    Email: new FormControl(''),
    File: new FormControl(''),
    Password: new FormControl(''),
    CPassword: new FormControl('')
  });

  ngOnInit(): void {
  }

  Clear(){}

  Delete(){}
  
}
