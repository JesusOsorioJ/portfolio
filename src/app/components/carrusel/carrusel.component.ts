import { Component, OnInit, Input } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'; 
import { databases } from "../../pages/details/database"
@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html'
})
export class CarruselComponent implements OnInit {

  @Input() step : number = 0;
  data = databases

  constructor(private _config:NgbCarouselConfig){

  }
  ngOnInit() {
    
  }
}
