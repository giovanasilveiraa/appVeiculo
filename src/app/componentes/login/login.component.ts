import { Component, OnInit } from '@angular/core';
import { ControleService } from 'src/app/services/controle/controle.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor (
    private servico: ControleService
  ){}


  ngOnInit() {

  }

}
