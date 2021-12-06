import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})
export class TelaInicialComponent implements OnInit {

  carros = [
    {
      nome:  'Nome do produto',
      foto:       'assets/carros/nivus/nivus1.png',
      valor:  'R$ 00,00',
      button:       'VER'

    },
    {
     nome:  'Nome do produto',
     foto:       'assets/carros/kadett/kadett1.jpg',
     valor:  'R$ 00,00',
     button:        'VER'
    },
    {
      nome:  'Nome do produto',
      foto:       'assets/carros/mercedes_sedan/merecedes1.jpeg',
      valor:  'R$ 00,00',
      button:        'VER'

    },
    {
      nome:  'Nome do produto',
      foto:       'assets/carros/hilux/hilux1.jpg',
      valor:  'R$ 00,00',
      button:         'VER'
    },
    {
      nome:  'Nome do produto',
      foto:       'assets/carros/corolla/corola1.png',
      valor:  'R$ 00,00',
      button:         'VER'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
