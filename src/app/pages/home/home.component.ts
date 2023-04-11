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

    // tl.to("#contactobtn",0, {y:"10vh"},0) 
    tl.to("#headerword",3, {y:"0vh"},0) 

    // tl.to("#parrafonombre",0, {display:"none"},0)
    // tl.to("#landing",0, {backgroundColor:'#B0C4DE'})
    // tl.to("#svg",0.0, {fill: '#FFFFFF'})
    // tl.to("#svg", 0.8, {x:'20vw', ease:"none"},0)
    // tl.to("#svg", 0.8, {y:"50vh", ease:"power1.in"},0)
    // tl.to("#landing",0.2, {backgroundColor:'#FFB6C1'},0.8)
    // tl.to("#svg", 0.56, {x:'34vw', ease:"none"},0.8)
    // tl.to("#svg", 0.56, {y:"25vh", ease:"power1.out"},0.8)
    // tl.to("#svg", 0.56, {x:'48vw',ease:"none"},1.36)
    // tl.to("#svg", 0.56, {y:"50vh",ease:"power1.in"},1.36)
    // tl.to("#landing",0.3, {backgroundColor:'#F0E68C'},1.92)
    // tl.to("#svg", 0.39, {x:'56.4vw', ease:"none"},1.92)
    // tl.to("#svg", 0.39, {y:"37.5vh", ease:"power1.out"},1.92)
    // tl.to("#svg", 0.39, {x:'64.8vw', ease:"none"},2.31)
    // tl.to("#svg", 0.39, {y:"50vh", ease:"power1.in"},2.31)
    // tl.to("#landing",0.3, {backgroundColor:'#FFFFFF'})
    // tl.to("#svg", 1, {opacity:0}, 2.70,)
    // tl.to("#parrafonombre",0, {display:"block"})
    
    
    
    setTimeout(() => {
      
    // tl.to("#palabra2",0, {color:"white"},0)
    // tl.to("#palabra4",0, {color:"white"},0)
    

    

    // tl.to("#names",0, {color:"#FFFFFF", x:'-8vw' },0)
    // tl.to("#minombre",0, {color:"#FFFFFF",x:'-8vw' },0)

    // tl.to("#names", 0.3, {color:"black",x:'8vw'}) 
    // tl.to("#minombre",0.3, {color:"#0000CD",x:'8vw'}, "-=0.2")   
    // tl.to("#names", 0.2, {y:'3vh', stagger:.1, ease:"power1.inOut"})
    // tl.to("#names", 0.33, {y:'-5vh', stagger:.1, ease:"power1.out" },"-=1.2")
    // tl.to("#names", 0.29, {y:'1vh', stagger:.1 ,ease:"power1.inOut"},"-=1.2")
    // tl.to("#names", 0, {stagger:.1, fontFamily:"TrebuchetMS"},"-=1.2")
    // tl.to("#names", 0.12, {y:'0vh', stagger:.1, ease:"power1.in"},"-=1.2")
    // tl.to("#names", 0.2, {y:'3vh', ease:"power1.inOut"})
    // tl.to("#names", 0.34, {y:'-6vh', fontFamily: "SegoeUI", ease:"power1.out"})
    // tl.to("#names", 0.33, {y:'2vh',ease:"power1.in"})
    // tl.to("#names", 0.23, {y:'-2vh',  ease:"power1.inOut"})
    // tl.to("#names", 0.2, {y:'1vh',  fontFamily: "SegoeUI", ease:"power1.out"})
    // tl.to("#names", 0.12, {y:'0vh', ease:"power1.in"})

    // tl.to("#palabra2",0.05, {color:"grey",yoyo:true, repeat:1})
    // tl.to("#palabra2",0.05, {color:"grey",yoyo:true, repeat:1},"+=0.1")
    // tl.to("#palabra2",0.05, {color:"#D3D3D3"},"+=0.1")
    // tl.to("#palabra2",0.05, {color:"#778899",yoyo:true, repeat:1},"+=1") 
    // tl.to("#palabra2",0.05, {color:"#778899",yoyo:true, repeat:1},"+=0.5")
    // tl.to("#palabra2",0.05, {color:"#778899"},"+=0.5")
    // tl.to("#palabra2",3, {color:"black"},"+=0.1") 

    // tl1.to("#palabra4",0.05, {color:"grey"},"-=4.0")
    // tl1.to("#palabra4",0.05, {color:"grey",yoyo:true, repeat:1},"+=1")
    // tl1.to("#palabra4",0.05, {color:"#D3D3D3"},"-=0.2")
    // tl1.to("#palabra4",0.05, {color:"#778899",yoyo:true, repeat:1},"+=1") 
    // tl1.to("#palabra4",0.05, {color:"#778899",yoyo:true, repeat:1},"+=0.5")
    // tl1.to("#palabra4",0.05, {color:"#778899"},"+=0.5")
    // tl1.to("#palabra4",3, {color:"black"},"+=0.1") 
    
    // tl.to("#contactobtn",3, {y:"0vw"},">")
    // tl.to("#headerword",3, {y:"0vh"},"-=3.0") 
    
    }, 1)

  }
  constructor(private router: Router) {}
  
  public onScroll(){
    this.ph = window.pageYOffset/this.h


    if (this.ph-this.p>=0.3&&this.p!=this.ph){
      window.scroll(0, Math.ceil(this.ph)*this.h);
      this.p = this.ph
      let vh = Math.ceil(this.ph)*100+"vh"
      let vhi = (Math.ceil(this.ph)*100-10)+"vh"
      gsap.to("#headerword",1, {y:vhi})  
      gsap.to("#headerword",1.5, {y:vh})      
    }
    if (this.p-this.ph>=0.3&&this.p!=this.ph){
      window.scroll(0, Math.floor(this.ph)*this.h);
      this.p = this.ph
      let vh = Math.floor(this.ph)*100+"vh"
      let vhi = (Math.floor(this.ph)*100-10)+"vh" 
      gsap.to("#headerword",0.0, {y:vhi})  
      gsap.to("#headerword",1.5, {y:vh}) 
    }
    
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