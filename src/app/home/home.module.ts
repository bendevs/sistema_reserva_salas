import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ModalModule } from 'dsg-ng2-bs4-modal/ng2-bs4-modal';
import { HomeComponent } from './home/home.component';
import { ParametrosComponent } from './parametros/parametros.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    Ng2SmartTableModule,
    
    HomeRoutingModule
  ],
  declarations: [
  		HomeComponent, 
      ParametrosComponent,
      UsuariosComponent
]
})
export class HomeModule { }
