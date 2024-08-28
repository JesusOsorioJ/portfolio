import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html'
})
export class TargetComponent {
  @Input() date = {technologies:{front:[""],back:[""],database:[""],test:[""]}};
}
