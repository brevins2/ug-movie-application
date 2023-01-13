import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ServeService } from 'src/app/Services/serve.service';

export interface Producers {
  ID: number,
  Name: string,
  Email: string,
  Genre: string,
  File: string
}

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  showFiller = false;
  producers: Producers[] = [];
  Title = "";
  alerts = true;

  constructor(private route: Router, private router: ActivatedRoute, private service: ServeService) { }

  ngOnInit(): void {
    this.service.getAllProducers().subscribe(data =>{
      this.producers = data.data;
    });
  }

  closeDangerAlert() {
    this.alerts = false;
  }

  search() {
    this.service.findByTitle(this.Title).subscribe(data => {
      this.producers = data.data;
      // this.closeDangerAlert();
    });
  }

  logout() {
  	this.route.navigate(['/login']);
  }
}
