import { Component, OnInit } from '@angular/core';
import { Modelo2 } from '../modelos/model2';
import { LocalDataSource } from 'ng2-smart-table';
import { titularesService } from '../servicios/reservas.service';
@Component({
  selector: 'app-parametros',
  templateUrl: './parametros.component.html',
  styleUrls: ['./parametros.component.css'],
  providers: [titularesService]
})
export class ParametrosComponent implements OnInit {

  public source: LocalDataSource;
  //datos1: Modelo1 [] = [];
  datos1: any [] = [];
  var_data: Modelo2;

  errorMessage: any;

  settings = {
    actions: {
      columnTitle: 'Acciones',
      add: true,
      edit: true,
      delete: true,
      position: 'left',
    },
    filter: {
      inputClass: '',
    },
    delete: {
      confirmDelete: true,
      deleteButtonContent: 'Eliminar',
    },
    attr: {
      id: '',
      class: '',
    },
    noDataMessage: 'No encontrado',      
    add: {
      confirmCreate: true,
      addButtonContent: 'Nuevo',
      createButtonContent: 'Crear',
      cancelButtonContent: 'Cancelar',
    },
    edit: {
      confirmSave: true,
      editButtonContent: 'Editar',
    },
    columns: {
      catalogo_id: {
        title: 'Id.',
      },
      catalogo_codigo: {
        title: 'Codigo',
      },
      catalogo_descripcion: {
        title: 'Descripcion',
      }
      /*catalogo_tipo: {
        title: 'Tipo',
      },
      catalogo_observaciones: {
        title: 'Observaciones',
      }*/
    },
    pager: {
      display: true,
      perPage: 10,
    },
  };
  variable = "hola";
  descripcion = "";

  var_id="";
  var_codigo= "";
  var_descripcion= "";
  var_tipo= "";
  var_observaciones= "";
  var_estado= "";
  var_usuario= "";

  constructor (public titularesService:titularesService){}

  public ngOnInit (){
    this.source = new LocalDataSource(this.datos1);
    this.getData();
    // alert("hola");
  }
  public buscarDatosCatalogo (res: string):void {
    //alert(res);
    let t: string = res;
    this.titularesService._getDatos2(t)
    .subscribe(
      titulares => this.tryfunction_1(titulares),
      error =>  this.errorMessage = <any>error);
  };

  public tryfunction_1 (var3: any):void {
    this.datos1 = var3[0].sp_obtener_datos_catalogo;
    this.source.load(this.datos1);
    console.log(this.datos1);
    this.var_id= this.datos1[0].catalogo_id;
    this.var_codigo= this.datos1[0].catalogo_codigo;
    this.var_descripcion= this.datos1[0].catalogo_descripcion;
    this.var_tipo= this.datos1[0].titular_tipo;
    this.var_observaciones= this.datos1[0].catalogo_observaciones;
  }

  public getData():void {
    let vars: string;
    this.titularesService.param_getDatos1(vars)
    .subscribe(
      titulares => this.tryfunction(titulares),
      error =>  this.errorMessage = <any>error);
  }

  public tryfunction (var1: any):void {
    this.datos1 = var1;
    this.source.load(this.datos1);
    this.descripcion= this.datos1[0].catalogo_descripcion;
  }

  private tryfunction2 (var1: any):void {
    this.var_data = var1;
  }

  private setData(var1: Modelo2):void {
    this.titularesService.setLand(var1).subscribe(
      titulares => this.tryfunction2(titulares),
      error =>  this.errorMessage = <any>error);
  }

  private updateData (var1: number, var2: string, var3: string):void {
    this.titularesService.updateLand(var1, var2, var3).subscribe(
      titulares => this.tryfunction2(titulares),
      error =>  this.errorMessage = <any>error);
  }

  private deleteData (var1: number, var2: string, var3: string, var4: string):void {
    this.titularesService.deleteLand(var1, var2, var3, var4).subscribe(
      titulares => this.tryfunction2(titulares),
      error =>  this.errorMessage = <any>error);
  }

  ///CRUD

  // boton para eliminar registro
  private onDeleteConfirm(event):void {
    if (window.confirm('Esta seguro de eliminar el registro')) {
      let var_data1 = event.data['catalogo_id'];
      let var_data2 = event.data['catalogo_codigo'];
      let var_data3 = event.data['catalogo_descripcion'];
      let var_data4 = event.data['catalogo_usuario'];
      console.log(var_data1);
      console.log(var_data2);
      console.log(var_data3);
      console.log(var_data4);
      //console.log (event.newData['mas_id']);
      this.deleteData (var_data1,var_data2,var_data3,var_data4);
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  // boton para realizar un update... (editar)
  private onSaveConfirm(event):void {
    if (window.confirm('Esta seguro de actualizar el registro?')) {
      let var_data1 = event.newData['catalogo_id'];
      let var_data2 = event.newData['catalogo_codigo'];
      let var_data3 = event.newData['catalogo_descripcion'];
      this.updateData (var_data1,var_data2, var_data3);
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }

  //boton para crear nuevo registro...
  private onCreateConfirm(event): void {
    if (window.confirm('¿Esta Seguro de agregar un nuevo registro?')) {

      // event.newData['name'] += ' + added in code';
      let var_data: Modelo2 = event.newData;
      this.setData (var_data);
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }

}