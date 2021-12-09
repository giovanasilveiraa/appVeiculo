import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { TelaInicialComponent } from './componentes/tela-inicial/tela-inicial.component';
import { CarrinhoComponent } from './componentes/carrinho/carrinho.component';
import { FavoritoComponent } from './componentes/favorito/favorito.component';
import { LoginComponent } from './componentes/login/login.component';
import { ProdutoComponent } from './componentes/produto/produto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompraFinalizadaComponent } from './componentes/compra-finalizada/compra-finalizada.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: TelaInicialComponent },
  { path: 'carrinho', component: CarrinhoComponent},
  { path:  'favorito', component: FavoritoComponent},
  { path:  'usuario', component: UsuarioComponent},
  { path:  'login', component: LoginComponent},
  { path:  'produto', component: ProdutoComponent},
  { path:  'compra_finalizada', component: CompraFinalizadaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

