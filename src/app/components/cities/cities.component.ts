import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/services/city.service';
import { concat, forkJoin } from 'rxjs';
import { concatMap, tap, mergeMap, toArray } from 'rxjs/operators';
import { PROVINCE } from 'src/mock-province';
import { City } from 'src/app/interfaces/City';


@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  cities: any = [];

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.getCities()
  }

  getCities() {
    const calls = PROVINCE.map(item => this.cityService.getCities(item.nome!));
    return forkJoin(calls).subscribe((res) => this.cities = res)
  }

  searchCity(city: string) {
    return this.cityService.getCities(city).subscribe((res) => this.cities =[res]);
  }
}
