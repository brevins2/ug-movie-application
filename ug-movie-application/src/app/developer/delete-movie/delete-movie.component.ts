import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ServeService } from 'src/app/Services/serve.service';

export class movies {
  constructor(
    public ID: number,
    public Title: string,
    public File: string,
    public Genre: string,
    public Producer: string,
    public Details: string
  ){}
}

export interface Movies {
    ID: number,
    Title: string,
    File: string,
    Genre: string,
    Producer: string,
    Details: string
}

@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.css']
})
export class DeleteMovieComponent implements OnInit {

  constructor(private http: HttpClient, private router: ActivatedRoute, private route: Router, private serve: ServeService) { }

  DeleteMovie = new FormGroup({
    ID: new FormControl(''),
    Title: new FormControl(''),
    File: new FormControl(''),
    Genre: new FormControl(''),
    Producer: new FormControl(''),
    Details: new FormControl('')
  });

  ngOnInit(): void {
    this.getCurrentMovie();    
  }

  getCurrentMovie() {
    this.serve.getWithID(this.router.snapshot.params['id']).subscribe((result: any) => {
      this.DeleteMovie = new FormGroup({
        ID: new FormControl(result['ID']),
        Title: new FormControl(result['Title']),
        Genre: new FormControl(result['Genre']),
        Producer: new FormControl(result['Producer']),
        File: new FormControl(result['File']),
        Details: new FormControl('Details')
      });
    });
  }

  Clear(){}

  Delete(){
    // this.serve.delete(this.router.snapshot.params['id'], this.DeleteMovie.value).subscribe((result) => {
    //   this.DeleteMovie.reset();
    //   return result;
    // });
  }
  
}
