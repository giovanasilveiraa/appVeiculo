import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

// COMPONENTES DO MATERIAL DESIGN
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import  {  SweetAlert2Module  } from '@sweetalert2/ngx-sweetalert2' ;

import { FavoritoComponent } from './componentes/favorito/favorito.component';
import { CarrinhoComponent } from './componentes/carrinho/carrinho.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';
import { TelaInicialComponent } from './componentes/tela-inicial/tela-inicial.component';
import {MatBadgeModule} from '@angular/material/badge';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { LoginComponent } from './componentes/login/login.component';
import { ProdutoComponent } from './componentes/produto/produto.component';
import { CompraFinalizadaComponent } from './componentes/compra-finalizada/compra-finalizada.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoritoComponent,
    CarrinhoComponent,
    FooterComponent,
    ToolbarComponent,
    TelaInicialComponent,
    UsuarioComponent,
    LoginComponent,
    ProdutoComponent,
    CompraFinalizadaComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    MatBadgeModule,
    RouterModule,
    SweetAlert2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
