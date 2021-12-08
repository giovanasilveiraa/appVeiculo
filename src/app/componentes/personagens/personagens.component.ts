import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.css']
})
export class PersonagensComponent implements OnInit {

  personagens = [
    {
      nome:         'Nome do Produto',
      foto:         'assets/carros/hilux/hilux1.jpg'
    },
    {
      nome:         'Nome do Produto',
      foto:         'assets/carros/nivus/nivus1.png'

    },
    {
      nome:         'Nome do Produto',
      foto:         'assets/carros/bronco/bronco2.jpg'

    },
    {
      nome:         'Nome do Produto',
      foto:         'assets/carros/toro/toro1.jpg'

    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
