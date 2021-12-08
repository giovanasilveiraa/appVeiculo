import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { TelaInicialComponent } from './componentes/tela-inicial/tela-inicial.component';
import { CarrinhoComponent } from './componentes/carrinho/carrinho.component';
import { PersonagensComponent } from './componentes/personagens/personagens.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: TelaInicialComponent },
  { path: 'carrinho', component: CarrinhoComponent},
  { path:  'personagens', component: PersonagensComponent},
  { path:  'usuario', component: UsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

