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
  
  async ngOnInit(){
  
  gsap.to(["#headerword","#headericon"],0, {y:"-15vh", 
  color:'rgb(10, 25, 47),',fill:'rgb(10, 25, 47)', opacity:"100"}) 
  gsap.to(["#headerword","#headericon"],2, {y:"0vh",fill:'#8892b0',
  opacity:"100",delay:6 }) 
  
  
}

  public onScroll(){
    this.ph = window.pageYOffset/this.h
    console.log("h",this.h)

  }

  public showClose(){
    this.show=!this.show
    
  }

}
