import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ServeService } from 'src/app/Services/serve.service';
import { Login, Producer } from 'src/app/interface';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  showFiller = false;
  producers: Producer[] = [];
  Title = "";
  alerts = true;
  content?: string;

  constructor(private route: Router, private router: ActivatedRoute, private service: ServeService) { }

  ngOnInit(): void {
    this.service.getAllProducers().subscribe(data =>{
      this.producers = data.data;
    });

    this.service.getPublicContent().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {console.log(err)
        if (err.error) {
          this.content = JSON.parse(err.error).message;
        } else {
          this.content = "Error with status: " + err.status;
        }
      }
    });
  }

  closeDangerAlert() {
    this.alerts = false;
  }

  search() {
    this.service.findByTitle(this.Title).subscribe(data => {
      this.producers = data.data;
    });
  }

  logout() {
  	this.route.navigate(['/login']);
  }
}
