import { Component, ViewChild , OnChanges, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute } from '@angular/router';
import  {  SweetAlert2Module  } from '@sweetalert2/ngx-sweetalert2' ;
import Swal from 'sweetalert2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;

  title = 'Projeto Veículo';

alertInfo() {
  Swal.fire('Olá');
}

constructor (
  private rota: ActivatedRoute
){}

ngOnChanges() {
  console.log(this.rota.snapshot);
}

ngOnInit() {
  console.log(this.rota.snapshot);
}
  close() {
    this.sidenav.close();
  }
}
