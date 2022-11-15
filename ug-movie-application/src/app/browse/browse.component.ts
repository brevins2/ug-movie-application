import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  panelOpenState = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  register() {
  	this.router.navigate(['subscribe']);
  }

  login() {
  	this.router.navigate(['login']);
  }

}
