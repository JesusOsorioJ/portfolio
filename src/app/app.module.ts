import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';

import { CarruselComponent } from './components/carrusel/carrusel.component';


import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { IntroballComponent } from './components/introball/introball.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';


@NgModule({
declarations: [
    AppComponent,
    HomeComponent,
    CarruselComponent,
    DetailsComponent,
    FooterComponent,
    HeaderComponent,
    IntroballComponent,
    PortafolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
