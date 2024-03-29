import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  showFiller = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
  	this.router.navigate(['/login']);
  }

}