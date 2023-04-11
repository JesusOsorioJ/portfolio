import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  show : boolean = false
  ph : number = 0;
  public onScroll(){
    this.ph = window.pageYOffset/window.innerHeight
  }
  public AddData(){
    this.show=!this.show
    
  }
  
}
