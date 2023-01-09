import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ServeService } from 'src/app/Services/serve.service';
import { Producer, Movies } from 'src/app/interface';

@Component({
  selector: 'app-producer',
  templateUrl: './producer.component.html',
  styleUrls: ['./producer.component.css']
})
export class ProducerComponent implements OnInit {

  constructor(private http: HttpClient, private router: ActivatedRoute, private route: Router, private serve: ServeService) { }
  producers: Producer[] = [];
  movies: Movies[] = [];

  ngOnInit(): void {
    this.serve.getAllProducers().subscribe(data =>{
      this.producers = data.data;
    });
    this.serve.getAll().subscribe(data => {
      this.movies = data.data;
    });
  }

}
