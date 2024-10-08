import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  show : boolean = false
  p : number = 0;
  link = [
    {href: "#inicio", iconname:"home", translate: "home"},
    {href: "#experience", iconname:"experience", translate: "workExperience"},
    {href: "#proyects", iconname:"myProjects", translate: "myProjects"},
    {href: "#contact", iconname:"contact", translate: "contact"},

  ]
  themeValue = "dark"
  language = "es"
  
  constructor(private translate: TranslateService) {
    const savedLanguage = localStorage.getItem('language') || 'es';
    translate.setDefaultLang('es');
    this.language = savedLanguage;
    this.translate.use(this.language); // Configura el idioma seleccionado

    const savedTheme = localStorage.getItem('theme') || 'dark';
    this.themeValue = savedTheme;
    document.documentElement.setAttribute('data-theme', this.themeValue); // Configura el tema seleccionado
  }

  public showClose(){
    this.show=!this.show
  }

  switchLanguage(value: string) {
    this.translate.use(value);
    this.language = value;
    localStorage.setItem('language', value);
  }

  switchTheme() {
    let value = "dark"
    if (this.themeValue == "dark") value = "light"
    document.documentElement.setAttribute('data-theme', value);
    this.themeValue = value;
    localStorage.setItem('theme', value);
  }
}
