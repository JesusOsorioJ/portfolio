import { Component } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-introball',
  templateUrl: './introball.component.html'
})
export class IntroballComponent {

  ngOnInit(){
  let tl = gsap.timeline()
  tl.to("#landing",0, {backgroundColor:'rgb(94, 142, 213)'})
  tl.to("#svg",0.0, {fill: '#FFFFFF'})
  tl.to("#svg", 0.8, {x:'20vw', ease:"none"},0)
  tl.to("#svg", 0.8, {y:"50vh", ease:"power1.in"},0)
  tl.to("#landing",0.2, {backgroundColor:'rgb(54, 88, 140)'},0.8)
  tl.to("#svg", 0.56, {x:'34vw', ease:"none"},0.8)
  tl.to("#svg", 0.56, {y:"25vh", ease:"power1.out"},0.8)
  tl.to("#svg1", 0.05, {height:"5vh",width:"13vh", ease:"power1.in"},0.75)
  tl.to("#svg1", 0.05, {height:"10vh",width:"10vh", ease:"power1.out"},0.80)
  tl.to("#svg", 0.56, {x:'48vw',ease:"none"},1.36)
  tl.to("#svg", 0.56, {y:"50vh",ease:"power1.in"},1.36)
  tl.to("#landing",0.3, {backgroundColor:'rgb(26, 53, 93)'},1.92)
  tl.to("#svg", 0.39, {x:'56.4vw', ease:"none"},1.92)
  tl.to("#svg", 0.39, {y:"37.5vh", ease:"power1.out"},1.92)
  tl.to("#svg1", 0.08, {height:"5vh",width:"13vh", ease:"power1.in"},1.86)
  tl.to("#svg1", 0.08, {height:"10vh",width:"10vh", ease:"power1.out"},1.92)
  tl.to("#svg", 0.39, {x:'64.8vw', ease:"none"},2.31)
  tl.to("#svg", 0.39, {y:"50vh", ease:"power1.in"},2.31)
  tl.to("#landing",0.3, {backgroundColor:'rgb(10, 25, 47)'})
  tl.to("#svg", 1, {opacity:0}, 2.70,)
  tl.to("#svg1", 0.12, {height:"5vh",width:"13vh", ease:"power1.in"},2.58)
  tl.to("#svg1", 0.12, {height:"10vh",width:"10vh", ease:"power1.out"},2.70)
  tl.to("#svg", 0.39, {x:'73.2vw', ease:"none"},2.70)
  tl.to("#svg", 0.39, {y:"40vh", ease:"power1.out"},2.70)
  tl.to("#svg", 0, {display:"none"},3)
  }
}
