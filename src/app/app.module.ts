import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeService } from './services/home.service';
import { HttpClientModule } from '@angular/common/http';
import { TopNavComponent } from './top-nav/top-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfoCardsComponent } from './info-cards/info-cards.component';
import { RouterModule } from '@angular/router';
import { InputFormComponent } from './input-form/input-form.component';
import { MaterialModule } from './material/material.module';
import { DetailedInfoComponent } from './detailed-info/detailed-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopNavComponent,
    InfoCardsComponent,
    InputFormComponent,
    DetailedInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,

  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
