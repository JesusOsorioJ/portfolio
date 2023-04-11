import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';

import { BtnComponent } from './components/btn/btn.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TargetDetailsComponent } from './components/target-details/target-details.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
declarations: [
    AppComponent,
    HomeComponent,
    BtnComponent,
    CarruselComponent,
    DetailsComponent,
    TargetDetailsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
