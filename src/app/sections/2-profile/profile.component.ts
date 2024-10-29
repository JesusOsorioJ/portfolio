import { Component, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { gsap } from 'gsap';
import { technologies } from 'src/app/pages/details/database';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  @ViewChildren('profiletool') profiletool!: QueryList<ElementRef>;

  items = technologies;
  async ngOnInit() {
    setTimeout(() => {
      this.profiletool.forEach((btn) => {
        let tl = gsap.timeline();
        tl.from(btn.nativeElement, {
          duration: 1.3,
          scale: 0.5,
        });
      });
    });
  }
}
