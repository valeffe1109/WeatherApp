import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../interfaces/City';
import { WeatherDetails } from '../interfaces/WeatherDetails';

@Injectable({
  providedIn: 'root'
})
export class CityService {


  constructor(private http: HttpClient) { }

  getCities(cityName: string): Observable<City[]> {
    return this.http.get<City[]>(`https://api.openweathermap.org/data/2.5/weather`, {
      params: {
        q: cityName,
        appid: 'cb946ab89fe63ff44c2b28108d323505',
        units: 'metric'
      }
    })
  }

  getCityForecast(cityName: string): Observable<WeatherDetails> {
    return this.http.get<WeatherDetails>('https://api.openweathermap.org/data/2.5/forecast', {
      params: {
        q: cityName,
        appid: 'cb946ab89fe63ff44c2b28108d323505',
        units: 'metric'
      }
    })
  }

}
