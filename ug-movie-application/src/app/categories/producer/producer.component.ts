import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ServeService } from 'src/app/Services/serve.service';
import { Movies, Producer } from 'src/app/interface';

@Component({
  selector: 'app-producer',
  templateUrl: './producer.component.html',
  styleUrls: ['./producer.component.css']
})
export class ProducerComponent implements OnInit {

  constructor(private http: HttpClient, private router: ActivatedRoute, private route: Router, private serve: ServeService) { }
  producerName = "Dream World";
  producers: Producer[] = [];
  movies: Movies[] = [];

  ngOnInit(): void {
    this.serve.getProducerWithID(this.router.snapshot.params['id']).subscribe(data =>{
      this.producers = data.data;
      console.log(this.producerName);
    });

    this.getMovieWithName();
  }

  getMovieWithName() {
    this.serve.getAll().subscribe(data => {
      this.movies = data.data;
    });
  }
}