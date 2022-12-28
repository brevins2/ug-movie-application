import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customer: Customers[] = [];
  displayedColumns: string[] = ['ID', 'Name', 'Username', 'Email', 'File', 'Password', 'CPassword', 'Edit', 'Delete'];
      dataSource = this.customer;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<{data: Customers[]}>('http://localhost:8080/Accounts').subscribe(data =>{
      this.customer = data.data;
      this.dataSource = this.customer;
      console.log('result => ', this.customer);
    });
  }
}
