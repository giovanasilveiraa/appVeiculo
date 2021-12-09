import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.component.html',
  styleUrls: ['./favorito.component.css']
})
export class FavoritoComponent implements OnInit {

  favoritos = [
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
