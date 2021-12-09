import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';

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

  const inputOptions = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        'Boleto': 'Boleto',
        'Catão de crédito': 'Cartão de crédito',
        'Cartão de débito': 'Cartão de débito'
      })
    }, 1000)
  })

  const { value: color } = await Swal.fire({
    title: 'Select a forma de pagamento',
    input: 'radio',
    inputOptions: inputOptions,
    inputValidator: (value) => {
      if (!value) {
        return 'You need to choose something!'
      }
    }
  })

  if (color) {
    Swal.fire({ html: `You selected: ${color}` })
  }

}
