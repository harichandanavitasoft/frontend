import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileService } from './file.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { log } from 'console';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'fileupload';

  uploadForm!: FormGroup;
  formdata: any;
  constructor(private fb: FormBuilder, private api: FileService) {

  }


  ngOnInit(): void {


  }
  select(event: any) {
    this.formdata = event.target.files;

    console.log(this.formdata);

  }


  uploadFile() {
    const f = this.formdata.item(0)
    this.api.fileupload(f).subscribe((res: any) => {

      console.log(res);
      
    })
  }

}
