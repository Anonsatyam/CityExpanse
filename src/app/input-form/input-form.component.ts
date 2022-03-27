import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {

  city_name;
  country_name;
  myData1;

  public dataForm: FormGroup;
  submitted = false;

  constructor(private service: HomeService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.dataForm = this.formBuilder.group({
      cityName: ['', Validators.required],
      countryName: ['', Validators.required],
    })
  }


  get f() { return this.dataForm.controls; }

  getListing() {
    this.service.getData(this.city_name, this.country_name)
      .subscribe((data) => this.myData1 = data)
  }

  onSubmit() {
    this.submitted = true
    this.city_name = this.dataForm.value.cityName;
    this.country_name = this.dataForm.value.countryName;
    this.getListing();
    this.router.navigate(['info']);
  }

}
