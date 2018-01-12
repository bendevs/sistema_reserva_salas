import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { ParametrosComponent } from './parametros/parametros.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


const homeRoutes: Routes = [
  //{ path: 'home',  component: HomeComponent },
  //{ path: 'home/app1',  component: App1Component },
  { path: 'home', component: HomeComponent, 
    children: [
        {path: 'parametros', component: ParametrosComponent, outlet:'firstchild'},
        {path: 'usuarios', component: UsuariosComponent, outlet:'firstchild'},
        
        //{path: ':id', component: SecondchildComponent, outlet:'secondchild'}
    ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
  //declarations: [AppComponent, App1Component, App2Component, App3Component, App4Component, App5Component]
})
export class HomeRoutingModule { }
