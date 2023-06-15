import { Component, OnInit } from '@angular/core';
import { ServeService } from 'src/app/services/serve.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from 'src/app/interface';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private http: HttpClient, private router: ActivatedRoute, private route: Router, private serve: ServeService) { }

  message: Message[] = [];
  searched = "";
  displayedColumns: string[] = ['ID', 'Name', 'Email', 'Message', 'Delete'];
    dataSource = this.message;

  ngOnInit(): void {
    this.retrieveMessages();
  }

  retrieveMessages() {
    this.serve.getAllMessages().subscribe(data => {
      this.message = data.data;
      this.dataSource = this.message;
    });
  }

  search() {
    this.serve.findByTitleMessage(this.searched).subscribe(data => {
      this.message = data.data;
    });
  }
}