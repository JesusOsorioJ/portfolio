import { Component, OnInit } from '@angular/core';
import { databases } from '../details/database'
import { gsap } from 'gsap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  data = databases
  show : boolean = false
  name: Array<string> = ["J","e","s","u","s"," ","O","s","o","r","i","o",","]
  parrafo: Array<string> = ["Soy","un","programador","FullStack","con","Enfasis","en","el","Stack",
   "Mern","(MongoDB,","Express.js,","React.js","y","Nodejs)","con", "aptitud", "de", 
   "aprender" ,"nuevas", "tecnologias.","Conoce", "mis" ,"proyectos", "dando" ,
   "click", "debajo", "o" ,"en" ,"la" ,"parte", "superior."]
  ph : number = 0;
  h : number = window.innerHeight;
  p : number = 0
 
  async ngOnInit(){
    
    // gsap.to("#svg", 0.8, {x:'20vw', ease:"none"})
    // gsap.to("#svg", 0.8, {y:"50vh", ease:"power1.in"})
    // gsap.to("#svg", 0.56, {x:'34vw', ease:"none", delay:0.8})
    // gsap.to("#svg", 0.56, {y:"25vh", ease:"power1.out", delay:0.8})
    // gsap.to("#svg", 0.56, {x:'48vw',ease:"none",delay:1.36})
    // gsap.to("#svg", 0.56, {y:"50vh",ease:"power1.in",delay:1.36})
    // gsap.to("#svg", 0.39, {x:'56.4vw', ease:"none",delay:1.92})
    // gsap.to("#svg", 0.39, {y:"37.5vh", ease:"power1.out",delay:1.92})
    // gsap.to("#svg", 0.39, {x:'64.8vw', ease:"none",delay:2.31})
    // gsap.to("#svg", 0.39, {y:"50vh", ease:"power1.in",delay:2.31})
    // gsap.to("#svg", 1, {r:"50vh", opacity:0, delay:2.70,})
    // gsap.to("#svg1", 0.1 ,{display:"none", delay:3.40,})
    
    
    
    setTimeout(() => {
    gsap.to("#names",0, {color:"white"})
    gsap.to("#names",0.2,  {fontFamily: "SegoeUI", left:'25vw'})
    gsap.to("#names", 0.2, {color:"black",x:'30vw', delay:3.70,})    
    gsap.to("#names", 0.2, {y:'3vh', stagger:.1, ease:"power1.inOut",delay:3.8})
    gsap.to("#names", 0.33, {y:'-5vh', stagger:.1, ease:"power1.out",delay:4.0 })
    gsap.to("#names", 0.29, {y:'1vh', stagger:.1 ,ease:"power1.inOut",delay:4.33 })
    gsap.to("#names", 0, {stagger:.1, fontFamily:"TrebuchetMS",delay:4.62})
    gsap.to("#names", 0.12, {y:'0vh', stagger:.1, ease:"power1.in",delay:4.62})
    gsap.to("#names", 0.2, {y:'3vh', stagger:.1, ease:"power1.inOut",delay:3.8})
    gsap.to("#names", 0.34, {y:'-6vh', fontFamily: "SegoeUI", ease:"power1.out",delay:7.0 })
    // gsap.to("#names", 0.33, {y:'2vh',ease:"power1.in",delay:5.12 })
    // gsap.to("#names", 0.23, {y:'-2vh',  ease:"power1.inOut",delay:5.45})
    // gsap.to("#names", 0.2, {y:'1vh',  fontFamily: "SegoeUI", ease:"power1.out",delay:5.68 })
    // gsap.to("#names", 0.12, {y:'0vh', ease:"power1.in",delay:5.88 })
   
     
    
    
    
    
    
    
    
    gsap.to("#palabra1",0, {color:"white"})
      gsap.to("#palabra1",5, {color:"#4B5563",yoyo:true, repeat:1})
    }, 1)

  }
  constructor(private router: Router) {}
  
  public AddData(){
    this.show=!this.show
    
  }

  public onScroll(){
    this.ph = window.pageYOffset/this.h
    // if (this.ph-this.p>=0.3&&this.p!=this.ph){
    //   window.scroll(0, Math.ceil(this.ph)*this.h);
    //   this.p = this.ph
    // }
    // if (this.p-this.ph>=0.3&&this.p!=this.ph){
    //   window.scroll(0, Math.floor(this.ph)*this.h);
    //   this.p = this.ph
    // }
  
  }
  
}

// gsap.to("#names1", {display:"flex",delay:3.50})
// gsap.to("#names",0.2, {top:'45vh',color:"black",left:'40vw'})
// gsap.to("#names", 0.2, {y:'45vh',color:"black",x:'45vw', delay:3.70,})    
// gsap.to("#names", 0.2, {y:'48vh', stagger:.1, ease:"power1.inOut",delay:3.8})
// gsap.to("#names", 0.3, {y:'40vh', stagger:.1, fontFamily: "SegoeUI", ease:"power1.out",delay:4.0 })
// gsap.to("#names", 0.3, {y:'45vh', stagger:.1, ease:"power1.in",delay:4.3 })
// gsap.to("#names", 0.2, {y:'50vh', ease:"power1.inOut",delay:6.0})
// gsap.to("#names", 0.4, {y:'10vh', delay:6.2})
// gsap.to("#names", 0.4, {y:'10vh', delay:6.2,color:"white"})
// gsap.to("#names1",0.01, {display:"none",delay:7.0})
// gsap.to("#home",0.01, {display:"block",delay:7.0})
//   gsap.to("#palabra1",0, {color:"white"})
//   gsap.to("#palabra1",5, {color:"#4B5563",yoyo:true, repeat:1})