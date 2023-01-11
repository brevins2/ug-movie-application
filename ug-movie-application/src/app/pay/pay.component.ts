import { Component, OnInit } from '@angular/core';
import { ServeService } from 'src/app/Services/serve.service';
import { Observable } from 'rxjs';
import { HttpResponse, HttpEventType, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';

  fileInfos?: Observable<any>;
  constructor(private serve: ServeService) {}

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  ngOnInit(): void {
  }

  upload(): void {
    this.progress = 0;

    if(this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if(file) {
        this.currentFile = file;

        this.serve.upload(this.currentFile).subscribe({
          next: (event: any) => {
            if(event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if(event instanceof HttpResponse) {
              this.message = event.body.message;
              this.fileInfos = this.serve.getFiles();
            }
          },
          error: (err: any) => {
            console.log(err);
            this.progress = 0;

            if(err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the file!';
            }

            this.currentFile = undefined;
          }
        });
      }

      this.selectedFiles = undefined;
    }
  }
}