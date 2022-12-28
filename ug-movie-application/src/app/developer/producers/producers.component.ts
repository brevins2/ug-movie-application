import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<{data: Producer[]}>('http://localhost:8080/Producers').subscribe(data =>{
      this.producer = data.data;
      this.dataSource = this.producer;
      console.log(this.producer);
    });
  }
}
