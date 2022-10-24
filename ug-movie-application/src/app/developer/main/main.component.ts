import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
  	private router: Router
  ) { }

  ngOnInit(): void {
  }

  producers(){
  	this.router.navigate(['producers']);
  }

  movies(){
  	this.router.navigate(['producers']);
  }

  customers(){
  	this.router.navigate(['producers']);
  }

  logout(){
  	this.router.navigate(['producers']);
  }

}