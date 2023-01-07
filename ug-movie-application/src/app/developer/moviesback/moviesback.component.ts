import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ServeService } from 'src/app/Services/serve.service';

export interface Movies {
    ID: number,
    Title: string,
    File: string,
    Genre: string,
    Producer: string,
    Details: string
}

@Component({
  selector: 'app-moviesback',
  templateUrl: './moviesback.component.html',
  styleUrls: ['./moviesback.component.css']
})
export class MoviesbackComponent implements OnInit {

  movies: Movies[] = [];
  displayedColumns: string[] = ['ID', 'Title', 'File', 'Genre', 'Producer', 'Details', 'Edit', 'Delete'];
    dataSource = this.movies;
  closeResult = '';

  constructor(private http: HttpClient, private router: ActivatedRoute, private route: Router, private modalService: NgbModal, private serve: ServeService) { }

  ngOnInit(): void {
    this.http.get<{data: Movies[]}>('http://localhost:8080/Movies').subscribe(
        data => {
          this.movies = data.data;
          this.dataSource = this.movies;
      });
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  Clear() {
    this.route.navigate(['/edit/movie']);
  }

  Delete(movie: Movies) {
    this.serve.deleteMovie(movie).subscribe((response)=> {
      this.movies = this.movies.filter((t) => t.ID == movie.ID);
      console.log(this.movies);
    });
  }
}