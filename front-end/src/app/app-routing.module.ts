import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./main/home/home.component";
import {LoginComponent} from "./main/login/login.component";
import {PrestadorFormComponent} from "./main/prestador/prestador-form/prestador-form.component";
import {PrestadorResolver} from "./main/prestador/resolver/prestador.resolver";
import {UsuarioResolver} from "./main/usuario/resolver/usuario.resolver";
import {UsuarioFormComponent} from "./main/usuario/usuario-form/usuario-form.component";
import {ServicosListComponent} from "./main/servicos/servicos-list/servicos-list.component";
import {ServicosSolicitadosComponent} from "./main/servicos/servicos-solicitados/servicos-solicitados.component";
import {ContatosComponent} from "./main/contatos/contatos.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'prestador/novo', component: PrestadorFormComponent, resolve: {
      prestador: PrestadorResolver
    }
  },
  {
    path: 'prestador/:id', component: PrestadorFormComponent, resolve: {
      prestador: PrestadorResolver
    }
  },
  {
    path: 'usuario/novo', component: UsuarioFormComponent, resolve: {
      usuario: UsuarioResolver
    }
  },
  {
    path: 'usuario/:id', component: UsuarioFormComponent, resolve: {
      usuario: UsuarioResolver
    }
  },
  {
    path: 'servicos', component: ServicosListComponent
  },
  {
    path: 'meus-servicos', component: ServicosSolicitadosComponent
  },
  {
    path: 'contatos', component: ContatosComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
