export class Proveedor {
  idProvider: number = 0;
  razonSocial: string;
  nombComercial: string;
  matriculaTributaria: string;
  telefono: number;
  direccion: string;
  correo: string;
  pais: string;
  region: string;
  ciudad: string;
  paginaWeb: string;
  codigoPostal: string;
  fechaInicio: string = "01-05-2010";
  fechaFin: string = "01-05-2010";
  descNegociado: number;
  intermediacion: number;
  sesionAdicional: number;
  numContrato: number;
  termPago: number;
  clasifTaller: string;
  actEconomica: string;
  estado: boolean = true;
  redAuto: boolean = true;
  inscSubocol: boolean = true;
  idProvidType: number;
  idTiempoResp: number;
}
