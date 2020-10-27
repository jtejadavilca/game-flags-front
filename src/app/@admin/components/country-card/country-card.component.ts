import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss']
})
export class CountryCardComponent implements OnInit {

  country: any = {
    name: 'Perú',
    continent: {
      name: 'América'
    }
  };
  constructor() { }

  ngOnInit(): void {
  }

}
