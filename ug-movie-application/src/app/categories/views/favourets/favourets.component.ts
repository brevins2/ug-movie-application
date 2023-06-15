import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServeService } from 'src/app/services/serve.service';
import { Movies } from 'src/app/interface';

@Component({
  selector: 'app-favourets',
  templateUrl: './favourets.component.html',
  styleUrls: ['./favourets.component.css']
})
export class FavouretsComponent implements OnInit {

  constructor(private router: ActivatedRoute, private route: Router, private serve: ServeService) { }
  movies: Movies[] = [];
  Title = "";
  alerts = true;

  ngOnInit(): void {
    this.getAllMovies();    
  }

  closeDangerAlert() {
    this.alerts = false;
  }

  getAllMovies() {
    this.serve.getAll().subscribe(data => {
      this.movies = data.data;
    });
  }

  search() {
    this.serve.findByTitle(this.Title).subscribe(data => {
      this.movies = data.data;
      this.closeDangerAlert();
    });
  }

  cancel() {
    this.route.navigate(['/cinema/all/all']);
  }
}
