import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  // selectedFile: File = null;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  logout() {
    this.router.navigate(['login']);
  }

  fileChanged(event: any){
    if(event.target.files.length >0){
      const file = event.target.files[0];
      const fd = new FormData();
      fd.append("file", file);
    
        // this.selectedFile = <File>events.target.files[0];
        this.http.post('gs://lutimbefilmz22.appspot.com', fd).subscribe(res =>{
        debugger
          console.log(res);
        });
      }
    }
}

// https://lutimbefilmz22-default-rtdb.firebaseio.com/ -> database
// gs://lutimbefilmz22.appspot.com -> storage