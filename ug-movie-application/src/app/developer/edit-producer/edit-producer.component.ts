import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServeService } from 'src/app/Services/serve.service';
import { Producer } from 'src/app/interface';

@Component({
  selector: 'app-edit-producer',
  templateUrl: './edit-producer.component.html',
  styleUrls: ['./edit-producer.component.css']
})
export class EditProducerComponent implements OnInit {

  constructor(private http: HttpClient, private router: ActivatedRoute, private route: Router, private serve: ServeService) { }
  producers: Producer[] = [];
  displayedColumns: string[] = ['Name', 'Email', 'Genre', 'File', 'Delete'];
    dataSource = this.producers;

  UpdateProducer = new FormGroup({
    Name: new FormControl(''),
    Email: new FormControl(''),
    Genre: new FormControl(''),
    File: new FormControl(''),
    Password: new FormControl(''),
    CPassword: new FormControl('')
  });

  ngOnInit(): void {
    this.getCurrentProducer();
  }

  getCurrentProducer() {
    this.serve.getProducerWithID(this.router.snapshot.params['id']).subscribe((result: any) => {
      this.producers = result.data;
      this.dataSource = this.producers;
    });
  }

  close() {
    this.route.navigate(['/developer/edits/producers']);
  }

  Update(){
    this.serve.updateProducer(this.router.snapshot.params['id'], this.UpdateProducer.value).subscribe((result) => {
      this.UpdateProducer.reset();
      return result;
    });
  }

  Clear(){
    this.UpdateProducer.reset();
  }

  Delete() {
    this.serve.deleteProducer(this.router.snapshot.params['id']).subscribe((response)=> {
      this.producers = response.data;
      this.close();
    });
  } 
}