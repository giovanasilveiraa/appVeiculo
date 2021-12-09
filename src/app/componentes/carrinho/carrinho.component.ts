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

    const { value: pagamento } = await Swal.fire({
      title: 'Selecione a forma de pagamento',
      input: 'select',
      inputOptions: {
        'pagamento': {
          boleto: 'Boleto',
          CartaoC: 'Cartão de crédito',
          CartaoD: 'Cartão de débito'
        },
      },
      inputPlaceholder: 'Selecione a forma de pagamento',
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          switch (value) {
            case 'boleto':
              Swal.fire(`Você selecionou: Boleto`)
              break;

            case 'CartaoC':
              Swal.fire(`Você selecionou: Cartão de crédito`)
              break;

            case 'CartaoD':
              Swal.fire(`Você selecionou: Cartão de débito`)
              break;

            default:
              resolve('Selecione uma forma de pagamento')
          }
        })
      }
    })
  }

  confirmButton() {
    Swal.fire({
      title: 'Deseja confirmar sua compra?',
      text: "Suas compras estão prontas para serem confirmadas!",
      icon: 'info',
      showCancelButton: true,
      cancelButtonColor: '#274690',
      confirmButtonColor: '#009A2B',
      confirmButtonText: 'Confirmar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Confirmada!',
          'Sua compra foi efetuada com sucesso.',
          'success'
        )
      }
    })
  }
}
