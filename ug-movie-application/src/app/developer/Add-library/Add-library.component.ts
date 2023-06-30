import { Component, OnInit } from '@angular/core';
import { ServeService } from 'src/app/services/serve.service';
import { Observable, finalize, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { Images } from 'src/app/interface';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-Add-library',
  templateUrl: './Add-library.component.html',
  styleUrls: ['./Add-library.component.css']
})
export class AddLibraryComponent implements OnInit {

  selectedFiles?: FileList;

  fileData: any;
  previewUrl: any;
  formData: FormData = new FormData();

  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.preview();
  }

  currentFile?: File;
  progress = 0;
  message = '';
  images: Images[] = [];
  ref?: AngularFireStorageReference;
  task?: AngularFireUploadTask;
  downloadURL?: Observable<string>;
  uploadProgress?: Observable<number>;

  fileInfos?: Observable<any>;
  Name = "";
  alerts = false;
  displayedColumns: string[] = ['Name', 'Edit', 'Delete'];
  dataSource = this.images;

  constructor(private afStorage: AngularFireStorage, private http: HttpClient, private router: ActivatedRoute, private route: Router, private serve: ServeService) {}

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  ngOnInit(): void {
    this.serve.getFiles().subscribe(data => {
      this.images = data.data;
      this.dataSource = this.images;
    });
  }

  closeDangerAlert() {
    this.alerts = false;
  }

  preview() {
    // Create a preview of the selected file (optional)
    const mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) != null) {
      const reader = new FileReader();
      reader.readAsDataURL(this.fileData);
      reader.onload = (_event) => {
        this.previewUrl = reader.result;
      };
    }
  }

  uploadFile() {
    // Append the file data to the FormData object
    this.formData.append('file', this.fileData);

    // Make a POST request to your backend API
    // this.serve.upload(this.formData).subscribe((response) => {
    //     console.log('File uploaded successfully.', response);
    //   }, (error) => {
    //     console.error('Error uploading file.', error);
    //   });
  }

  upload(): void {
    if(this.selectedFiles) {
      // const file = this.selectedFiles[0]
      // const path = file.type.indexOf('image') === -1 ? 'movies' : 'images';
      // const fileId = Math.random().toString(36).substring(2);
      // this.ref = this.afStorage.ref(`${path}/${fileId}`);
      // this.task = this.ref.put(file);
      // this.uploadProgress = this.task.percentageChanges() as Observable<number>;
      // this.task.snapshotChanges().pipe(
      //   finalize(() => {
      //     this.ref?.getDownloadURL().subscribe((url: string) => {
      //       this.serve.upload({ URL: url, Name: file.name }).subscribe({
      //         next: (event: any) => {
      //           if(event instanceof HttpResponse) {
      //             this.message = "file uplaod successful";
      //             this.serve.getFiles().subscribe(data => {
      //               this.images = data.data;
      //               this.dataSource = this.images;
      //             });
      //           }
      //         },
      //         error: (err: any) => {
      //           console.log(err);
      //           this.uploadProgress = of(0)
      //           if(err.error && err.error.message) {
      //             this.message = err.error.message;
      //           } else {
      //             this.message = 'Could not upload the file!';
      //           }
      //           this.selectedFiles = undefined
      //         }
      //       });
      //     });
      //   })
      // ).subscribe()

      // const handleChange = (event: { target: { name: string; files: any[]; value: any; }; }) => {
      //   if (event.target.name === 'image') {
      //     new FormData({
      //       ...formData,
      //       [event.target.name]: event.target.files[0],
      //     });
      //   } else {
      //     new FormData({
      //       ...formData,
      //       [event.target.name]: event.target.value,
      //     });
      //   }
      // };
    } 
  }

  search() {
    this.serve.findByFileName(this.Name).subscribe(data => {
      this.images = data.data;
      this.dataSource = this.images;
      console.log(this.dataSource);
    });
  }
}