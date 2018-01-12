import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Modelo1 } from '../modelos/model1';
import { Modelo2 } from '../modelos/model2';

@Injectable()
export class titularesService {

    //Catalogo - parametros
    private catalogoUrl1 = 'http://localhost:9093/v.01/catalogo/obtenerCatalogo';
    private catalogoUrl2 = 'http://localhost:9093/v.01/catalogo/eliminaCatalogo';
    private catalogoUrl3 = 'http://localhost:9093/v.01/catalogo/updateCatalogo';
    private catalogoUrl4 = 'http://localhost:9093/v.01/catalogo/insertarCatalogo';

    constructor(private http: Http) { }

    public getDatosCatalogoPuesto(res:string): any {
          return this.http.post(this.catalogoUrl1,{var:res})
               .map(this.extractData)
               .catch(this.handleError);
   }

    public obtenerCatalogo(var4: string): any {
        //alert(var4);
        console.log(var4);
        return this.http.post(this.catalogoUrl1, {var:var4})
             .map(this.extractDataCatalogo)
             .catch(this.handleError);
    }
    private extractDataCatalogo(res: Response) {
        console.log(res);
        let body = res.json();
        return body.data;
    }

    private extractData(res: Response) {
        let body = res.json();
        console.log("servicio",body);
        //alert ("HoLa"+" "+body.data[0].titular_id);
        return body.data;
    }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
//-------------------------------------------------------------------------
// ------------------------------------------------ servicios parametros
//-------------------------------------------------------------------------


public  getLand(pin: string): Observable<Modelo2[]> {
    return this.http.post(this.catalogoUrl1, {})
    .map(this.extractData)
    .catch(this.handleError);
  }

  public setLand(var1: Modelo2): Observable<Modelo2[]> {
    console.log ('set data...');
    let aux = this.getDataVar1 (var1);
    //let headers = new Headers({ 'Content-Type': 'application/json' });
    //let options = new RequestOptions({ headers: headers });
    return this.http.post(this.catalogoUrl4, aux)
    .map(this.extractData)
    .catch(this.handleError);
  }

  private getDataVar1 (var1: Modelo2): any{
    let aux = {
      id: var1.catalogo_id,
      cod: var1.catalogo_codigo,
      descripcion: var1.catalogo_descripcion,
      tipo: var1.catalogo_tipo,
      observaciones: var1.catalogo_observaciones,
      estado: var1.catalogo_estado,
      usuario: var1.catalogo_usuario,
    };
    return aux;
  }

  public updateLand (var1: number, var2: string, var3: string): Observable<Modelo2[]>{
    console.log ('update data...',var1,var2,var3);
    return this.http.post(this.catalogoUrl3,{id:var1,cod:var2,desc:var3})
    .map(this.extractData)
    .catch(this.handleError);
  }

  private getDataVar2 (var1: Modelo2): any{
    let aux = {
      id: var1.catalogo_id,
      codigo: var1.catalogo_codigo,
      descripcion: var1.catalogo_descripcion
    };
    return aux;
  }

  public deleteLand (var1: number, var2: string, var3: string, var4: string): Observable<Modelo2[]>{
    return this.http.post(this.catalogoUrl2,{id:var1,cod:var2,desc:var3,usu:var4})
    .map(this.extractData)

    .catch(this.handleError);
  }

  private param_getDataVar3 (var1: Modelo2): any{
    let aux = {
      id: var1.catalogo_id
    };
    return aux;
  }

  public param_getDatos1(res:string): any {

    let var1 = '?descripcion='+res;
    let newUrl = this.catalogoUrl1+var1;
    return this.http.get(newUrl)
    .map(this.extractData)
    .catch(this.handleError);
  }

  public _getDatos2(res:string): any {

    //let var1 = '?descripcion='+res;
    //let newUrl = this.catalogoUrl1+var1;
    return this.http.post(this.catalogoUrl1,{var:res})
    .map(this.extractData)
    .catch(this.handleError);
  }

}
