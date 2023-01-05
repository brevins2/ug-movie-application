import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  UpdateMovie = new FormGroup({
    ID: new FormControl(''),
    Title: new FormControl(''),
    Genre: new FormControl(''),
    Producer: new FormControl(''),
    File: new FormControl('')
  });

  ngOnInit(): void {
  }

  Update(){}

  Clear(){}
  
}
