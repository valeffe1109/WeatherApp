import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.css']
})
export class DetailsCardComponent implements OnInit {
  @Input()details:any={}
  constructor() { }

  ngOnInit(): void {
    console.log(this.details);
  }

}
