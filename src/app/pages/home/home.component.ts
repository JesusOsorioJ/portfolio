import { Component  } from '@angular/core';
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
 
ngOnInit(){
  gsap.registerPlugin(ScrollTrigger);

  gsap.to("#target", {
      filter: " opacity(100%)", y: "-2vh", duration: 1, stagger: 0.2,
      scrollTrigger: {
        trigger: "#target", start: "center 80%", end: "center 0%", 
        toggleActions: "play none none none",
        markers: {
              startColor: "purple",
              endColor: "fuchsia",
              fontSize: "3rem",
            },
       
      },
    });
 }
  
}

// markers: {
        //     startColor: "purple",
        //     endColor: "fuchsia",
        //     fontSize: "3rem",
        //   },