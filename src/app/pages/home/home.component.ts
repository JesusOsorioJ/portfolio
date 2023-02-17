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
  name: Array<string> = ["J","e","s","u","s"," ","O","s","o","r","i","o",","]
  parrafo: Array<string> = ["Soy","un","programador","FullStack","con","Enfasis","en","el","Stack",
   "Mern","(MongoDB,","Express.js,","React.js","y","Nodejs)","con", "aptitud", "de", 
   "aprender" ,"nuevas", "tecnologias.","Conoce", "mis" ,"proyectos", "dando" ,
   "click", "debajo", "o" ,"desliza" ,"hacia" ,"abajo"]
  ph : number = 0;
  h : number = window.innerHeight;
  p : number = 0
 
  async ngOnInit(){
    let tl = gsap.timeline()

    
    tl.to("#contactobtn",0, {y:"15vh", display:"none"},0) 

    setTimeout(() => {
      // Entrando a pantalla
    tl.to("#minombre",0, {display:"none",x:'-8vw' },0)
    tl.to(["#palabra1","#palabra2","#minombre","#names"],0, {display:"none",color:"#0a192f"},0)
    tl.to(["#palabra1","#palabra2"],0, {display:"block"},3.00)
    tl.to(["#minombre","#names"],0, {display:"block",x:'-8vw'},3.00)
    tl.to("#names",2, {color:"#8892b0",x:'0vw' })
    tl.to("#minombre", 2 , {color:"#64ffda",x:'0vw' })
    
    //Salto y cambio de estilo
    tl.to("#names", 0.2, {y:'3vh', stagger:.1, ease:"power1.inOut"},"-=1.2")
    tl.to("#names", 0.33, {y:'-5vh', stagger:.1, ease:"power1.out" },"-=1.2")
    tl.to("#names", 0.29, {y:'1vh', stagger:.1 ,ease:"power1.inOut"},"-=1.2")
    tl.to("#names", 0.3, {stagger:.1, color:"#ccd6f6",fontStyle:"normal"},"-=1.5")
    tl.to("#names", 0.12, {y:'0vh', stagger:.1, ease:"power1.in"},"-=1.2")
    tl.to("#names", 0.2, {y:'3vh', ease:"power1.inOut"})
    tl.to("#names", 0.34, {y:'-6vh', ease:"power1.out"})
    tl.to("#names", 0.33, {y:'2vh',ease:"power1.in"})
    tl.to("#names", 0.23, {y:'-2vh',  ease:"power1.inOut"})
    tl.to("#names", 0.2, {y:'1vh',ease:"power1.out"})
    tl.to("#names", 0.12, {y:'0vh', ease:"power1.in"})

    tl.to("#palabra1",0.2, {color:"#a8b2d1",yoyo:true, repeat:2})
    tl.to("#palabra2",0.05, {color:"#495670",yoyo:true, repeat:1})
    tl.to("#palabra2",0.05, {color:"#495670",yoyo:true, repeat:1},"+=0.1")
    tl.to("#palabra2",0.05, {color:"#233554"},"+=0.2")
    tl.to("#palabra2",0.05, {color:"#495670",yoyo:true, repeat:1},"+=1") 
    tl.to("#palabra2",0.05, {color:"#495670",yoyo:true, repeat:1},"+=0.5")
    tl.to("#palabra2",0.05, {color:"#495670"},"+=0.5")
    tl.to("#palabra2",3, {color:"#a8b2d1"},"+=0.1") 

    tl.to("#contactobtn",0, {display:"block"},"-=4.0")
    tl.to("#contactobtn",2, {y:"0vw"},"-=4.0")
    tl.to("#target",0, {yPercent:100},0)
    }, 1)

  }
  constructor(private router: Router) {}
  
  public onScroll(){
    
    this.ph = window.pageYOffset/this.h
    if(this.ph>0.6){
      
    gsap.to("#target",2,  {yPercent:0})}
    
    if (Math.abs(this.ph-this.p)>=0.3&&this.p!=this.ph){
      let ent 
      if(this.ph-this.p>0){ ent = Math.ceil(this.ph)}else{
         ent = Math.floor(this.ph)
      }
      this.p = this.ph
      // let routas = ["#inicio","#proyectos","#contacto"]
      // this.router.navigate('/#proyecto')
      window.scroll(0, ent*this.h);
      
      // let vh = ent*100+"vh"
      // let vhi = (ent*100-10)+"vh"
      // gsap.to("#headerword",1, {y:vhi})  
      // gsap.to("#headerword",1.5, {y:vh}) 
      
    }
   
    
  }
  
}

