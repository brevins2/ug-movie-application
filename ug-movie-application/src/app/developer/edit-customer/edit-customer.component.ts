import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/interface';
import { ServeService } from 'src/app/services/serve.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  constructor(private http: HttpClient, private router: ActivatedRoute, private route: Router, private serve: ServeService) { }

  customer: User[] = [];
  displayedColumns: string[] = ['Name', 'Username', 'Email', 'Password', 'CPassword', 'Delete'];
    dataSource = this.customer;

  UpdateCustomer = new FormGroup({
    Name: new FormControl(''),
    Username: new FormControl(''),
    Email: new FormControl(''),
    Password: new FormControl(''),
    CPassword: new FormControl('')
  });

  ngOnInit(): void {
    this.getCurrentCustomer();
  }

  getCurrentCustomer() {
    this.serve.getUserWithID(this.router.snapshot.params['id']).subscribe((result: any) => {
      this.customer = result.data;
      this.dataSource = this.customer;
    });
  }

  close() {
    this.route.navigate(['/developer/edits/customers']);
  }

  Update(){
    this.serve.updateUser(this.router.snapshot.params['id'], this.UpdateCustomer.value).subscribe((result) => {
      this.UpdateCustomer.reset();
      return result;
    });
  }

  Clear(){
    this.UpdateCustomer.reset();
  }

  Delete() {
    this.serve.deleteUser(this.router.snapshot.params['id']).subscribe((response)=> {
      this.customer = response.data;
      this.close();
    });
  }
}
