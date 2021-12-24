import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { City } from 'src/app/interfaces/City';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  @Output() onSearchCity: EventEmitter<string> = new EventEmitter();

  city: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.city) {
      alert('Inserisci il testo')
      return
    }
    this.onSearchCity.emit(this.city);
  }



}
