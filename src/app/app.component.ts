import { Component, OnInit } from '@angular/core';
import { Proveedor } from './proveedor';
import { ProveedorService } from './services/proveedor.service';

import LiferayParams from '../types/LiferayParams'

declare const Liferay: any;

@Component({
	templateUrl: 
		Liferay.ThemeDisplay.getPathContext() + 
		'/o/create-provider/app/app.component.html'
})
export class AppComponent implements OnInit {
	public proveedor: Proveedor = new Proveedor();
	public titulo = 'Crear Proveedor';

	constructor(private proveedorService: ProveedorService) {}

	ngOnInit(){}

	public create(): void{
		this.proveedorService.create(this.proveedor);
		console.log('Cliket..');
		console.log(this.proveedor);
	  }
}
