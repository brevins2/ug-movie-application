import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ServeService } from 'src/app/Services/serve.service';
import { User } from 'src/app/interface';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customer: User[] = [];
  displayedColumns: string[] = ['ID', 'Name', 'Username', 'Email', 'File', 'Password', 'CPassword', 'Edit', 'Delete'];
      dataSource = this.customer;
  closeResult = '';

  DeleteCustomer = new FormGroup({
    ID: new FormControl(''),
    Name: new FormControl(''),
    Username: new FormControl(''),
    Email: new FormControl(''),
    File: new FormControl(''),
    Password: new FormControl(''),
    CPassword: new FormControl('')
  });

  constructor(private http: HttpClient, private router: ActivatedRoute, private route: Router, private modalService: NgbModal, private serve: ServeService) { }

  ngOnInit(): void {
    this.http.get<{data: User[]}>('http://localhost:8080/Accounts').subscribe(data =>{
      this.customer = data.data;
      this.dataSource = this.customer;
      console.log('result => ', this.customer);
    });
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  cancel() {
    this.route.navigate(['/edit/customer']);
  }

  Delete() {
    this.serve.deleteUser(this.router.snapshot.params['id']).subscribe((response)=> {
      // this.movies = this.movies.filter((t) => t.ID !== customerDelete.ID);
      console.log(response);
    });
  }
}
