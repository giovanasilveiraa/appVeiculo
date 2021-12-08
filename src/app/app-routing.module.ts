import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { TelaInicialComponent } from './componentes/tela-inicial/tela-inicial.component';
import { CarrinhoComponent } from './componentes/carrinho/carrinho.component';
import { FavoritoComponent } from './componentes/favorito/favorito.component';
import { LoginComponent } from './componentes/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: TelaInicialComponent },
  { path: 'carrinho', component: CarrinhoComponent},
  { path:  'favorito', component: FavoritoComponent},
  { path:  'usuario', component: UsuarioComponent},
  { path:  'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

