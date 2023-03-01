import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { databases } from '../../pages/details/database'


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit {
  data = databases
  valueObjet =""
  valueObjet1 =""
  myControl = new FormControl('');
  options: string[] = ["javascript","react","node","express","graphql","angular","nodemon","mongodb","sass",
  "tailwind","redux","socket","sendgrid","cloudinary","stripe",
  "reactrouter","firebase","fbauthentication","gsap","scrolltrigger"];
  filteredOptions!: Observable<string[]>;
 
  onSubmit() {
    this.valueObjet1 = this.valueObjet
    this.data = []
    for (let i of databases){
      for (let j of i.herramientas.all) {
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
  }


  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    this.valueObjet = filterValue
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}