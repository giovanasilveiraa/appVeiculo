import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// COMPONENTES DO MATERIAL DESIGN
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { PersonagensComponent } from './componentes/personagens/personagens.component';
import { CarrinhoComponent } from './componentes/carrinho/carrinho.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';
import { TelaInicialComponent } from './componentes/tela-inicial/tela-inicial.component';
import {MatBadgeModule} from '@angular/material/badge';
import { UsuarioComponent } from './componentes/usuario/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonagensComponent,
    CarrinhoComponent,
    FooterComponent,
    ToolbarComponent,
    TelaInicialComponent,
    UsuarioComponent,


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
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
