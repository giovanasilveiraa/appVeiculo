import { Component, OnInit, OnChanges } from '@angular/core';
import { ControleService } from 'src/app/services/controle/controle.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit , OnChanges {
pagina: string = ''
  constructor(
    private servico: ControleService
  ) { }

  ngOnInit(): void {
  console.log('a')
  }
 ngOnChanges(){
   console.log('b')
 }

  click() {
    this.servico.setPagina('login');
    this.servico.evento.subscribe(
      evento => {
        console.log(evento)
        this.pagina = evento;
      }
    )
  }
}
