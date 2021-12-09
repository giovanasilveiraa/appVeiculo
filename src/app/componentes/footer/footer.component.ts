import { Component, OnInit } from '@angular/core';
import { ControleService } from 'src/app/services/controle/controle.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    private servico: ControleService
  ) { }

  ngOnInit(): void {
  }
click(pagina: string){
this.servico.setPagina(pagina)
}
}
