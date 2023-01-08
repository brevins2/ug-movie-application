import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServeService } from 'src/app/Services/serve.service';
import { Producer } from 'src/app/interface';

@Component({
  selector: 'app-producers',
  templateUrl: './producers.component.html',
  styleUrls: ['./producers.component.css']
})
export class ProducersComponent implements OnInit {

  producer: Producer[] = [];
  searched = "";
	displayedColumns: string[] = ['ID', 'Name', 'Email', 'Genre', 'File', 'Edit', 'Delete'];
  	dataSource = this.producer;

  constructor(private http: HttpClient, private router: ActivatedRoute, private route: Router, private serve: ServeService) { }

  ngOnInit(): void {
    this.serve.getAllProducers().subscribe(data =>{
      this.producer = data.data;
      this.dataSource = this.producer;
    });
  }

  cancel() {
    this.route.navigate(['/edit/producer']);
  }

  search() {
    this.serve.findByNameProducers(this.searched).subscribe(data => {
      this.producer = data.data;
    });
  }
}
