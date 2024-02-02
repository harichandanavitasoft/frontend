import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http:HttpClient) { }

  fileupload(file:File):Observable<any>{
    const formdata: FormData = new FormData();
    formdata.append('image', file);

    return this.http.post('http://localhost:2000/user/create',formdata)
  }
}
