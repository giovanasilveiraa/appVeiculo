import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  carros = [

    {
      nome:       'Nome do produto',
      foto:       'assets/carros/hilux/hilux1.jpg',
      valor:      'R$ 00,00',
      button:     'Remover'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
