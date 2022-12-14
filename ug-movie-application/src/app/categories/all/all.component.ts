import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  showFiller = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
  	this.router.navigate(['/login']);
  }
}
