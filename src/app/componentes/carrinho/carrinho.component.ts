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

  confirmBox(){
    Swal.fire({
      title: 'Forma de pagamento',
      text: 'Escolha como deseja pagar',
      icon: 'question',
      showCancelButton: true,
      showDenyButton: true,
      confirmButtonText: 'Boleto',
      denyButtonText: 'Cartão de crédito',
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Confirmado!',
          'forma de pagamento selecionada.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

  ConfirmButton() {
    Swal.fire({
      title: 'Confirmar compra',
      text: "Suas compras estão prontas para serem confirmadas!",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#274690',
      cancelButtonColor: '#B80C09',
      confirmButtonText: 'Confirmar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Confirmada!',
          'Parabéns sua compra foi efetuada com sucesso.',
          'success'
        )
      }
    })
  }

}
