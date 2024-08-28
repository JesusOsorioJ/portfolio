import { Component } from '@angular/core';
import { gsap } from 'gsap';
import { technologies } from 'src/app/pages/details/database';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {

  items = technologies;

  async ngOnInit(){
    let tl = gsap.timeline()
    tl.to("#contactobtn",0, {y:"15vh", display:"none"},0) 

    setTimeout(() => {
      // Entrando a pantalla
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
    }, 1)
  }

}
