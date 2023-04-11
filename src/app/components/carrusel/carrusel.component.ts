import { Component, OnInit, Input } from '@angular/core';
import { databases } from "../../pages/details/database"
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);


@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html'
})
export class CarruselComponent implements OnInit {

  @Input() step : number = 0;
  data = databases
  
  ngOnInit() {
    
  }
}
