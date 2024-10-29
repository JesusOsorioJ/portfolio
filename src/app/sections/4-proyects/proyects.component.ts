import { Component, OnInit, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { databases } from '../../pages/details/database'

@Component({
  selector: 'app-input',
  templateUrl: './proyects.component.html'
})
export class InputComponent implements OnInit {
  // @ViewChildren('proyecttarget') proyecttarget!: QueryList<ElementRef>;
  data = databases
  valueObjet =""
  valueObjet1 =""
  myControl = new FormControl('');
  options: string[] = [
    'JS',
    'TS',
    'PHP',

    'react',
    'nextjs',
    'angular',
    'vite',
    'vuejs', 
    
    'tailwind',
    'sass',
    'bootstrap',
    'gapsap',
    'eslint',
        
    'vuex',
    'redux',
    'zustand',

    'node',
    'nestjs',
    'laravel',
    'express',
    'graphql', 
    'firebase',
    
    'stripe',
    'socket',
    'sendgrid',
    'cloudinary',
    'bcryptjs',
    'swagger',
    
    'postgresql',
    'prisma',
    'mysql',
    'mongodb', 

    'jest',
    'cypress',
    'PHPunit',
  ];
  filteredOptions!: Observable<string[]>;
 
  onSubmit() {
    this.valueObjet1 = this.valueObjet
    this.data = []
    for (let i of databases){
      for (let j of i.technologies.all) {
        if (j == this.valueObjet){
          this.data=[...this.data, i]
        }
      }
    }
    if (this.valueObjet.length == 0){this.data = databases}
  }
  
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );

    // this.proyecttarget.forEach((box:any) => {
    //   const scrollBox = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: box,
    //       pin: true,
    //       start: "medium top",
    //       end: "bottom bottom",
    //       markers: true,
    //       toggleActions: "play none none reverse"
    //     }
    //   });
    //   scrollBox.from(box, { duration: 1, opacity: 0 });
    // });
  }

  private _filter(value: string): string[] {
    const filterValue = value;
    this.valueObjet = filterValue
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}