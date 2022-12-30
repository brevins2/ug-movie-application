import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

export interface FileUpload {
  key: string;
  name: string;
  url: string;
  file: File;
}

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent implements OnInit {

	RegisterForm = new FormGroup({
		Title: new FormControl(''),
		File: new FormControl(''),
		Genre: new FormControl(''),
		Producer: new FormControl(''),
		Details: new FormControl('')
	});
  private basePath = '/uploads';

  constructor(private http: HttpClient, file: File, private db: AngularFireDatabase, private storage: AngularFireStorage) {
    this.file = file;
  }

  ngOnInit(): void {
  }
  pushFileToStorage(fileUpload: FileUpload): Observable<number> {
  const filePath = `${this.basePath}/${fileUpload.file.name}`;
  const storageRef = this.storage.ref(filePath);
  const uploadTask = this.storage.upload(filePath, fileUpload.file);

  uploadTask.snapshotChanges().pipe(
    finalize(() => {
      storageRef.getDownloadURL().subscribe(downloadURL => {
        fileUpload.url = downloadURL;
        fileUpload.name = fileUpload.file.name;
        this.saveFileData(fileUpload);
        });
      })
    ).subscribe();

    return uploadTask.percentageChanges();
  }

  uploadTask.snapshotChanges().pipe(finalize(() => this.downloadURL = fileRef.getDownloadURL() )).subscribe();

  save() {
    this.http.post<any>('http://localhost:8080/add/Movie', this.RegisterForm.value).subscribe(res=>{
      // console.log(res);
      this.RegisterForm.reset();
    });
  }
}
