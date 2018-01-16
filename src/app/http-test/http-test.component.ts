import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {

  someData: String = 'Harvard of Finland';
  imgFolder: String = 'http://media.mw.metropolia.fi/wbma/uploads/';
  imgUrl: String = 'http://10.114.34.142/articles/giphy%20(1).gif';

  constructor(private http: HttpClient) { }

  getJson() {
    this.http.get('assets/package.json').subscribe((data) => {
      console.log(data);
      this.someData = data.name;
    });
  }

  getMedia() {
    this.http.get('http://media.mw.metropolia.fi/wbma/media').subscribe( (data) => {
      this.imgUrl = this.imgFolder + data[0].filename;
      console.log(this.imgUrl);
    });
  }

  ngOnInit() {
    this.getJson();
    this.getMedia();
  }
}
