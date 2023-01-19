import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/interface';
import { ServeService } from 'src/app/Services/serve.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-message',
  templateUrl: './delete-message.component.html',
  styleUrls: ['./delete-message.component.css']
})
export class DeleteMessageComponent implements OnInit {

  constructor(private serve: ServeService, private router: ActivatedRoute, private route: Router) { }
  message: Message[] = [];
  displayedColumns: string[] = ['ID', 'Name', 'Email', 'Message', 'Delete'];
    dataSource = this.message;

  ngOnInit(): void {
    this.getCurrentMessage();
  }

  getCurrentMessage() {
    this.serve.getMessageWithID(this.router.snapshot.params['id']).subscribe((result: any) => {
      this.message = result.data;
      this.dataSource = this.message;
    });
  }

  Delete() {
    this.serve.deleteMessage(this.router.snapshot.params['id']).subscribe((response)=> {
      this.message = response.data;
      this.back();
    });
  }

  back() {
    this.route.navigate(['/developer/edits/messages']);
  }
}