import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';

export interface Producer {
  ID: number,
  Name: string,
  Email: string,
  Genre: string,
  File: string,
  Password: string,
  CPassword: string,
}

@Component({
  selector: 'app-producers',
  templateUrl: './producers.component.html',
  styleUrls: ['./producers.component.css']
})
export class ProducersComponent implements OnInit {

  producer: Producer[] = [];
	displayedColumns: string[] = ['ID', 'Name', 'Email', 'Genre', 'File', 'Password', 'CPassword', 'Edit', 'Delete'];
  	dataSource = this.producer;
  closeResult = '';
  UpdateProducer = new FormGroup({
    ID: new FormControl(''),
    Name: new FormControl(''),
    Username: new FormControl(''),
    Email: new FormControl(''),
    File: new FormControl(''),
    Password: new FormControl(''),
    CPassword: new FormControl('')
  });

  DeleteProducer = new FormGroup({
    ID: new FormControl(''),
    Name: new FormControl(''),
    Username: new FormControl(''),
    Email: new FormControl(''),
    File: new FormControl(''),
    Password: new FormControl(''),
    CPassword: new FormControl('')
  });

  constructor(private http: HttpClient, private router: ActivatedRoute, private route: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.http.get<{data: Producer[]}>('http://localhost:8080/Producers').subscribe(data =>{
      this.producer = data.data;
      this.dataSource = this.producer;
      console.log(this.producer);
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

  update() {
    this.route.navigate(['/edit/producer']);
  }

  delete() {
    this.route.navigate(['/delete/producer']);
  }
}
