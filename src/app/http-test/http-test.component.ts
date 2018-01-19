import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {

  someData: String = 'Glassfish Server 5.0';
  imgFolder: String = 'http://media.mw.metropolia.fi/wbma/uploads/';
  imgUrl;

  constructor(private http: HttpClient) { }

  getJson() {
    this.http.get('assets/package.json').subscribe((data) => {
      console.log(data);
      this.someData = data['name'];
    });
  }

  getMedia() {
    this.http.get('http://media.mw.metropolia.fi/wbma/media').subscribe( (data) => {
      this.imgUrl = data;
      console.log(this.imgUrl);
    });
  }

  ngOnInit() {
    this.getJson();
    this.getMedia();
  }
}
