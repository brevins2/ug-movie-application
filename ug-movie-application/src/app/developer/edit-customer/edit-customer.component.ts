import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  UpdateCustomer = new FormGroup({
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

  Update(){}

  Clear(){}

}
