import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent implements OnInit {

	RegisterForm = new FormGroup({
		title: new FormControl(''),
		file: new FormControl(''),
		genre: new FormControl(''),
		producer: new FormControl(''),
		movieinfo: new FormControl('')
	});

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    alert('whooo!!!!');
  }
}
