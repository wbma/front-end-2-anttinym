import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {

  someData: String = 'Harvard of Finland';

  constructor(private http: HttpClient) { }

  getJson() {
    this.http.get('assets/package.json').subscribe((data) => {
      console.log(data);
      this.someData = data.name;
    });
  }


  ngOnInit() {
    this.getJson();
  }
}
