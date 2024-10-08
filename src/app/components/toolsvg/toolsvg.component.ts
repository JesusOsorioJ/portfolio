import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toolsvg',
  templateUrl: './toolsvg.component.html'
})
export class ToolsvgComponent {
 @Input() iconname: string ="";
 @Input() size: string ="50px";
}
