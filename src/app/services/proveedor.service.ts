import { Injectable } from '@angular/core';
//import { PROVEEDORES } from './proveedores.json';
import { Proveedor } from '../proveedor';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders  } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  private urlEndPoint = 'https://liferaydev.subocol.com/o/provider/createProvider';
  private httpHeaders = new HttpHeaders({'Content-Type': 'aplication/json'});
  constructor( public http: HttpClient) { }

  create(proveedor: Proveedor): Observable<Proveedor> {
    return this.http.post<Proveedor>(this.urlEndPoint, proveedor, {headers: this.httpHeaders});
  }
}
