import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
})
export class TargetComponent {
  @Input() date = {
    url: '',
    name: '', 
    imageswebpages: [''],
    technologies: {
      front: [''],
      back: [''],
      database: [''],
      test: [''],
    },
  };
}
