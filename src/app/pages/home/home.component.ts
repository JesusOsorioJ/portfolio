import { Component } from '@angular/core';
import { databases } from '../details/database'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  data = databases
  show : boolean = false
  public AddData(){
    this.show=!this.show
  }
}
