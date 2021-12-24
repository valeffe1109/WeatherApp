import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CitiesComponent } from './components/cities/cities.component';
import { CityCardComponent } from './components/city-card/city-card.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CityDetailsComponent } from './components/city-details/city-details.component';
import { DetailsCardComponent } from './components/details-card/details-card.component';
import { NgSelectModule } from '@ng-select/ng-select';



const appRoutes: Routes = [
  { path: '', component: CitiesComponent },
  { path: 'city/:cityName', component: CityDetailsComponent }
]

@NgModule({

  declarations: [
    AppComponent,
    CitiesComponent,
    CityCardComponent,
    SearchbarComponent,
    CityDetailsComponent,
    DetailsCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgSelectModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
