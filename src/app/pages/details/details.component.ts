import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { databases } from './database'

@Component({
  selector: 'details-home',
  templateUrl: './details.component.html'
})
export class DetailsComponent {
  data = databases
  id : string = "" ;
  step : number = 0 ;
  show : boolean = false
  
  public AddData(){
    this.show=!this.show
  }
    constructor(private activatedRoute: ActivatedRoute) {
      this.id = this.activatedRoute.snapshot.params['id'];
      for(let i =0;i<this.data.length;i++){
         if (this.data[i].url == this.id){
           this.step = i}}
     }
    ngOnInit() {
   }
   
}