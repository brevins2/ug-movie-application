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
      let x = result.data;
      x.forEach((element: any) => {
        this.UpdateCustomer = new FormGroup({
          Name: new FormControl(element['Name']),
          Username: new FormControl(element['Username']),
          Email: new FormControl(element['Email']),
          Password: new FormControl(element['Password']),
          CPassword: new FormControl(element['CPassword'])
        });
      });
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
