import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { TelaInicialComponent } from './componentes/tela-inicial/tela-inicial.component';
import { EpisodiosComponent } from './componentes/episodios/episodios.component';
import { PersonagensComponent } from './componentes/personagens/personagens.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: TelaInicialComponent },
  { path: 'episodios', component: EpisodiosComponent},
  { path:  'personagens', component: PersonagensComponent},
  { path:  'usuario', component: UsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

