import { Component } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  show : boolean = false
  ph : number = 0;
  h : number = window.innerHeight;
  w : number = window.innerWidth;
  public onScroll(){
    this.ph = window.pageYOffset/this.h
    console.log("h",this.h)

  }

  public AddData(){
    this.show=!this.show
    
  }

}
