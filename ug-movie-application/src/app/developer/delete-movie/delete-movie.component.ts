import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.css']
})
export class DeleteMovieComponent implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  DeleteMovie = new FormGroup({
    ID: new FormControl(''),
    Title: new FormControl(''),
    Genre: new FormControl(''),
    Producer: new FormControl(''),
    File: new FormControl('')
  });

  ngOnInit(): void {
  }

  Clear(){}

  Delete(){}
  
}
