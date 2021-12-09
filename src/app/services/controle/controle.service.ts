import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControleService {
evento: EventEmitter <string>= new EventEmitter<string>();
pagina: string = '';
  constructor() { }
setPagina(pagina:string) {
  this.pagina = pagina;
  this.evento.emit(this.pagina);
}
}
