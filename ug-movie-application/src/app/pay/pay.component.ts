import { Component, OnInit } from '@angular/core';
import { ServeService } from 'src/app/Services/serve.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpResponse, HttpEventType, HttpClient } from '@angular/common/http';
import { Images } from 'src/app/interface';

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
  images: Images[] = [];

  fileInfos?: Observable<any>;
  constructor(private http: HttpClient, private router: ActivatedRoute, private route: Router, private serve: ServeService) {}

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  ngOnInit(): void {
    this.serve.getFiles().subscribe(data => {
      this.images = data.data;
    });
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
              this.message = event.body.currentFile;
              console.log(this.selectedFiles);
              this.serve.getFiles().subscribe(data => {
                this.images = data.data;
              });
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

      this.selectedFiles;
    }

    console.log(this.selectedFiles);

  }
}