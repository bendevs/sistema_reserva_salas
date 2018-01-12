import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { InitComponent } from '../init/init.component';
import { LoginComponent } from '../login/login.component';
//import { HomeComponent } from '../home/home.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [
    //{ path: 'hero/:id',      component: HeroDetailComponent },
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'inicio', component: InitComponent },
    { path: 'login', component: LoginComponent },
    //{ path: 'home', component: HomeComponent },
 
    // otherwise redirect to home
    { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
  	RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
