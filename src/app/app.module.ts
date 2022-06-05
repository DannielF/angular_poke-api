import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../app/material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './main/app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PokeInfoComponent } from './components/poke-list-info/poke-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { PokeDetailsComponent } from './components/poke-details/poke-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    PokeInfoComponent,
    HomeComponent,
    PokeDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
