import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServeService } from 'src/app/Services/serve.service';
import { Movies } from 'src/app/interface';

@Component({
  selector: 'app-favourets',
  templateUrl: './favourets.component.html',
  styleUrls: ['./favourets.component.css']
})
export class FavouretsComponent implements OnInit {

  constructor(private router: ActivatedRoute, private route: Router, private serve: ServeService) { }
  movies: Movies[] = [];
  searched = "";

  ngOnInit(): void {
  }

  search() {
    this.serve.findByTitle(this.searched).subscribe(data => {
      this.movies = data.data;
    });
  }

  cancel() {
    this.route.navigate(['/cinema/all/movies']);
  }
}
