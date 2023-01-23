import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ServeService } from 'src/app/Services/serve.service';
import { Movies } from 'src/app/interface';

@Component({
  selector: 'app-moviesback',
  templateUrl: './moviesback.component.html',
  styleUrls: ['./moviesback.component.css']
})
export class MoviesbackComponent implements OnInit {

  movies: Movies[] = [];
  searched = "";
  displayedColumns: string[] = ['ID', 'Title', 'File', 'Genre', 'Producer', 'Details', 'Edit', 'Delete'];
    dataSource = this.movies;
  closeResult = '';

  constructor(private http: HttpClient, private router: ActivatedRoute, private route: Router, private serve: ServeService) { }

  ngOnInit(): void {
    this.serve.getAll().subscribe(data => {
      this.movies = data.data;
      this.dataSource = this.movies;
    });
  }

  Clear() {
    this.route.navigate(['/edit/movie']);
  }

  search() {
    this.serve.findByTitle(this.searched).subscribe(data => {
      this.movies = data.data;
      console.log(this.movies);
    });
  }

  add() {
    this.route.navigate(['/register/movie']);
  }
}