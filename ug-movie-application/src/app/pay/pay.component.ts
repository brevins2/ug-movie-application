import { Component, OnInit } from '@angular/core';
import { ServeService } from 'src/app/Services/serve.service';
import { Observable, finalize, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpResponse, HttpEventType, HttpClient } from '@angular/common/http';
import { Images } from 'src/app/interface';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/compat/storage';

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
  ref?: AngularFireStorageReference;
  task?: AngularFireUploadTask;
  downloadURL?: Observable<string>;
  uploadProgress?: Observable<number>;

  fileInfos?: Observable<any>;
  constructor(private afStorage: AngularFireStorage, private http: HttpClient, private router: ActivatedRoute, private route: Router, private serve: ServeService) {}

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  ngOnInit(): void {
    this.serve.getFiles().subscribe(data => {
      this.images = data.data;
    });
  }

  upload(): void {
    if(this.selectedFiles) {
      const file = this.selectedFiles[0]
      const path = file.type.indexOf('image') === -1 ? 'movies' : 'images';
      const fileId = Math.random().toString(36).substring(2);
      this.ref = this.afStorage.ref(`${path}/${fileId}`);
      this.task = this.ref.put(file);
      this.uploadProgress = this.task.percentageChanges() as Observable<number>;
      this.task.snapshotChanges().pipe(
        finalize(() => {
            this.ref?.getDownloadURL().subscribe((url: string) => {
                    this.serve.upload({ URL: url, Name: file.name }).subscribe({
          next: (event: any) => {
            if(event instanceof HttpResponse) {
              this.message = "file uplaod successful";
              this.serve.getFiles().subscribe(data => {
                this.images = data.data;
              });
            }
          },
          error: (err: any) => {
            console.log(err);
            this.uploadProgress = of(0)
            if(err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the file!';
            }
            this.selectedFiles = undefined
          }
        });
      });

            })
        ).subscribe()
    } 

  }
}