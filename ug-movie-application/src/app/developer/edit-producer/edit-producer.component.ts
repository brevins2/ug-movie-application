import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServeService } from 'src/app/services/serve.service';
import { Producer, Images, Genre } from 'src/app/interface';

@Component({
  selector: 'app-edit-producer',
  templateUrl: './edit-producer.component.html',
  styleUrls: ['./edit-producer.component.css']
})
export class EditProducerComponent implements OnInit {

  constructor(private http: HttpClient, private router: ActivatedRoute, private route: Router, private serve: ServeService) { }
  producers: Producer[] = [];
  images: Images[] = [];
  genres: Genre[] = [];
  File = '';

  UpdateProducer = new FormGroup({
    Name: new FormControl(''),
    Email: new FormControl(''),
    Genre: new FormControl(''),
    File: new FormControl(''),
    URL: new FormControl('')
  });

  ngOnInit(): void {
    this.getCurrentProducer();

    this.serve.getFiles().subscribe(data => {
      this.images = data.data;
    });

    this.serve.getAllGenres().subscribe(data => {
      this.genres = data.data;
    });
  }

  getCurrentProducer() {
    this.serve.getProducerWithID(this.router.snapshot.params['id']).subscribe((result: any) => {
      let x = result.data;
      x.forEach((element: any) => {
        this.UpdateProducer = new FormGroup({
          Name: new FormControl(element['Name']),
          Email: new FormControl(element['Email']),
          Genre: new FormControl(element['Genre']),
          File: new FormControl(element['File']),
          URL: new FormControl(element['URL'])
        });
      });
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