import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ServeService } from 'src/app/Services/serve.service';

export interface Producers {
  ID: number,
  Name: string,
  Email: string,
  Genre: string,
  File: string,
  Password: string,
  CPassword: string,
}

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  showFiller = false;
  producers: Producers[] = [];

  constructor(private route: Router, private router: ActivatedRoute, private service: ServeService) { }

  ngOnInit(): void {
    this.service.getAllProducers().subscribe(data =>{
        this.producers = data.data;
      });
  }

  logout() {
  	this.route.navigate(['/login']);
  }
}
