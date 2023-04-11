import { Component } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  show : boolean = false
  p : number = 0;
  
//   async ngOnInit(){
  
//   gsap.to(["#headerword","#headericon"],0, {y:"-15vh", 
//   color:'rgb(10, 25, 47),',fill:'rgb(10, 25, 47)', opacity:"100"}) 
//   gsap.to(["#headerword","#headericon"],2, {y:"0vh",fill:'#8892b0',
//   opacity:"100",delay:6 }) 
  
  
// }
  public showClose(){
    this.show=!this.show
    
  }


  ngOnInit() {
    // Animation open and close header 
    setInterval(() => {
      //header quiet at the top
      if (window.pageYOffset / window.innerHeight < 0.1) {
        gsap.to(["#headerword", "#headericon"],
          { color: "white", duration: 2, stroke: "white" })
        gsap.to("#header", {
          background: "transparent", duration: 2,
        })
      } else if (window.pageYOffset / window.innerHeight != this.p) {
        //header quiet  but not at the top
        gsap.to(["#headerword", "#headericon"],
          { color: "gray", stroke: "gray", duration: 2 })
        gsap.to("#header", {
          background: "#1d3a65", duration: 2,
        })
      }
      this.p = window.pageYOffset / window.innerHeight
    }, 1000)
  }

  onScroll() {
    //Header in move
    if (window.pageYOffset / window.innerHeight > 0.1) {
      gsap.to(["#headerword", "#headericon"], {
          color: "transparent",
        duration: 2, stroke: "transparent"
      })
      gsap.to("#header", {
        background: "transparent", duration: 2,
      })

    }}
}
