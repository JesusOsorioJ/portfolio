import { Component, OnInit, Input } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'; 

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html'
})
export class CarruselComponent implements OnInit {

  @Input() fotos = {url:"",imageswebpages:[]}
  @Input() pos : number = 0;

  constructor(private _config:NgbCarouselConfig){
  }
  ngOnInit() {
    
  }
}
