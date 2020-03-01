import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BasePageComponent } from './components/shared/partials/base-page/base-page.component';
import { FooterComponent } from './components/shared/partials/footer/footer.component';
import { HeaderComponent } from './components/shared/partials/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { AboutComponent } from './components/about/about.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';




@NgModule({
  declarations: [
    AppComponent,
    BasePageComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent,
    AboutComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    FormsModule,
    ReactiveFormsModule,

    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatFormFieldModule,
  ],
  providers: [ { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },],
  bootstrap: [AppComponent]
})
export class AppModule { }
