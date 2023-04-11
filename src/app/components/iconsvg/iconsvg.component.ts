import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-iconsvg',
  templateUrl: './iconsvg.component.html'
})
export class IconsvgComponent {
 @Input() iconname: string ="";
}
