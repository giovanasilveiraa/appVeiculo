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
      nome: 'Nome do produto',
      foto: 'assets/carros/hilux/hilux1.jpg',
      valor: 'R$ 00,00',
      button: 'Remover'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  async formaPagamento() {

    const { value: fruit } = await Swal.fire({
      title: 'Select field validation',
      input: 'select',
      inputOptions: {
        'Fruits': {
          apples: 'Apples',
          bananas: 'Bananas',
          grapes: 'Grapes',
          oranges: 'Oranges'
        },
        'Vegetables': {
          potato: 'Potato',
          broccoli: 'Broccoli',
          carrot: 'Carrot'
        },
        'icecream': 'Ice cream'
      },
      inputPlaceholder: 'Select a fruit',
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise(void function (resolve) {
          if (value === 'oranges') {
            resolve();
          } else {
            resolve('You need to select oranges :)');
          }
        })
      }
    })
  }
}
