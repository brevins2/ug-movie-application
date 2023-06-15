import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ServeService } from 'src/app/services/serve.service';
import { User } from 'src/app/interface';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  searched = "";
  customer: User[] = [];
  displayedColumns: string[] = ['ID', 'Name', 'Username', 'Email', 'Password', 'CPassword', 'Edit', 'Delete'];
      dataSource = this.customer;
  closeResult = '';

  constructor(private http: HttpClient, private router: ActivatedRoute, private route: Router, private serve: ServeService) { }

  ngOnInit(): void {
    this.http.get<{data: User[]}>('http://localhost:8080/Accounts').subscribe(data =>{
      this.customer = data.data;
      this.dataSource = this.customer;
    });
  }

  cancel() {
    this.route.navigate(['/edit/customer']);
  }

  search() {
    this.serve.findByUserName(this.searched).subscribe(data => {
      this.customer = data.data;
      console.log(this.searched);
    });
  }
}
