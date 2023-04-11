import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html'
})
export class TargetComponent {
  @Input() date = {herramientas:{front:[""],back:[""],database:[""],test:[""]}};
}
