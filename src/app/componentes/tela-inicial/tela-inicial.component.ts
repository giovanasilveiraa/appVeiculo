import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})
export class TelaInicialComponent implements OnInit {

  carros = [
    {
      nome:      'Hilux',
      foto:      'assets/carros/hilux/hilux1.jpg',
      valor:     'R$ 310.000,00',
      button:    'VER'

    },
    {
     nome:       'Kadett',
     foto:       'assets/carros/kadett/kadett1.jpg',
     valor:      'R$ 23.000,00',
     button:     'VER'
    },
    {
      nome:       'Mercedes sedan',
      foto:       'assets/carros/mercedes_sedan/merecedes1.jpeg',
      valor:      'R$ 286.900,00',
      button:     'VER'

    },
    {
      nome:       'Nivus',
      foto:       'assets/carros/nivus/nivus1.png',
      valor:      'R$ 105.250,00',
      button:     'VER'
    },
    {
      nome:       'Corolla',
      foto:       'assets/carros/corolla/corola1.png',
      valor:      'R$ 175.000,00',
      button:     'VER'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
