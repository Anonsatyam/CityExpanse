import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-detailed-info',
  templateUrl: './detailed-info.component.html',
  styleUrls: ['./detailed-info.component.css']
})
export class DetailedInfoComponent implements OnInit {
  newData1: any = [];
  one = []
  a;
  b;
  c;
  constructor(private service: HomeService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(queryParams => {
      this.a = queryParams['city_name'];
      this.b = queryParams['country_name'];
      this.c = queryParams['category_name']
    });
    this.fetchData();
  }

  fetchData() {
    this.newData1 = [];
    this.service.getData(this.a, this.b).subscribe((data) => {
      const newData = data;
      this.newData1 = newData;
      this.one = this.newData1.prices.filter(a => a.category_name === this.c)
    });
  }
}
