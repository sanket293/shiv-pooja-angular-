import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ShivStutiesComponent } from './components/shiv-stuties/shiv-stuties.component';


const routes: Routes = [
  {path: '', component: HomeComponent, data: {title: 'Home'}},
  {path: 'home', component: HomeComponent, data: {title: 'Home'}},
  {path: 'about-us', component: AboutusComponent, data: {title: 'About us'}},
  {path: 'contact-us', component: ContactusComponent, data: {title: 'Contact us'}},
  {path: 'shiv-stuties', component: ShivStutiesComponent, data: {title: 'Shiv Stuties'}},
  {path: '**', component: PageNotFoundComponent}
    
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
