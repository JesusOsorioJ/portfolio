import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SwiperModule } from 'swiper/angular';
import {MatInputModule} from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { IntroballComponent } from './components/introball/introball.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { InputComponent } from './components/input/input.component';
import { NameComponent } from './components/name/name.component';


@NgModule({
declarations: [
    AppComponent,
    HomeComponent,
    CarruselComponent,
    DetailsComponent,
    FooterComponent,
    HeaderComponent,
    IntroballComponent,
    PortafolioComponent,
    InputComponent,
    NameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SwiperModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
