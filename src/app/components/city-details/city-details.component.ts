import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherDetails } from 'src/app/interfaces/WeatherDetails';
import { CityService } from 'src/app/services/city.service';
import * as moment from 'moment';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.css']
})



export class CityDetailsComponent implements OnInit {
  details: WeatherDetails[] = [];
  tmp: WeatherDetails[] = [];
  currentDate = moment().format('DD');
  days: number[] = [];
  selectedDay: string = '';
  cityName: string = this.route.snapshot.paramMap.get('cityName')!;
  constructor(private cityService: CityService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCityDetails()
    this.getDays()
  }

  getCityDetails() {
    return this.cityService.getCityForecast(this.cityName).subscribe((res) => {
      this.tmp = res.list
      this.details = res.list
    })
  }

  getDays() {
    while (this.days.length < 6) {
      this.days.push(parseInt(this.currentDate) + this.days.length)
    }
  }

  filterDetails() {
    const filteredArray = this.tmp.filter((item: any) => moment(item.dt_txt).format('DD') === String(this.selectedDay))
    this.details = filteredArray
    if (this.selectedDay === null) {
      this.details = this.tmp
    }
  }

}
