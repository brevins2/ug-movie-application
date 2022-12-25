import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

export class customers{
  constructor(
  public ID: number,
  public Name: string,
  public Username: string,
  public Email: string,
  public File: string,
  public Password: string,
  public CPassword: string
  ){}
}

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customer: customers[] = [];
  displayedColumns: string[] = ['ID', 'Name', 'Username', 'Email', 'File', 'Password', 'CPassword'];
    dataSource = customers;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8080/Accounts').subscribe(result =>{
      this.customer = result.show;
      // console.log(this.customer);
      // this.customer = JSON.parse(result);
      console.log('result => ', result);
    });
  }
}
